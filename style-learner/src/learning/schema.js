#!/usr/bin/env node

/**
 * Post entry schema for the style learning system.
 *
 * Defines the structure for storing published posts with metadata,
 * draft comparisons, and engagement stats. Provides validation
 * and a factory for creating entries from post markdown files.
 *
 * Usage:
 *   node src/learning/schema.js add --file posts/twitter/2026-03-06-my-post.md
 *   node src/learning/schema.js validate data/learning/corpus/2026-03-06-my-post.json
 */

const fs = require("fs");
const path = require("path");

const CONFIG_PATH = path.join(__dirname, "../../config.json");
const config = fs.existsSync(CONFIG_PATH) ? JSON.parse(fs.readFileSync(CONFIG_PATH, "utf-8")) : {};

const SCHEMA_VERSION = 1;

const PLATFORMS = config.platforms || ["twitter", "linkedin", "blog"];
const LANGUAGES_MAP = config.platformLanguages || {};
const DEFAULT_LANGUAGE = (config.persona && config.persona.language) || "en";
const EDIT_TYPES = ["word_swap", "rephrase", "cut", "addition", "reorder", "tone_shift"];
const MEDIA_TYPES = ["image", "audio", "video", "carousel", "document"];
const DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const CORPUS_DIR = path.join(__dirname, "../../data/learning/corpus");

// --- Schema definition (for documentation and validation) ---

const postEntrySchema = {
  schemaVersion: { type: "number", required: true },
  id: { type: "string", required: true },
  platform: { type: "string", required: true, enum: PLATFORMS },
  language: { type: "string", required: true },
  date: { type: "string", required: true, pattern: /^\d{4}-\d{2}-\d{2}$/ },
  dayOfWeek: { type: "string", required: true, enum: DAYS },

  published: {
    type: "object",
    required: true,
    fields: {
      text: { type: "string", required: true },
      formatting: { type: "array", required: false },
      media: { type: "array", required: false },
    },
  },

  draft: {
    type: "object",
    required: false,
    fields: {
      text: { type: "string", required: true },
      source: { type: "string", required: false },
    },
  },

  engagement: {
    type: "object",
    required: false,
    fields: {
      views: { type: "number", required: false },
      comments: { type: "number", required: false },
      reactions: { type: "object", required: false },
      capturedAt: { type: "string", required: false },
    },
  },

  edits: { type: "array", required: false },
  analysis: { type: "object", required: false },
};

// --- Validation ---

function validate(entry) {
  const errors = [];

  if (entry.schemaVersion !== SCHEMA_VERSION) {
    errors.push(`schemaVersion must be ${SCHEMA_VERSION}, got ${entry.schemaVersion}`);
  }
  if (!entry.id || typeof entry.id !== "string") {
    errors.push("id is required and must be a string");
  }
  if (!PLATFORMS.includes(entry.platform)) {
    errors.push(`platform must be one of: ${PLATFORMS.join(", ")}`);
  }
  if (!entry.language || typeof entry.language !== "string") {
    errors.push("language is required and must be a string");
  }
  if (!entry.date || !/^\d{4}-\d{2}-\d{2}$/.test(entry.date)) {
    errors.push("date must be in YYYY-MM-DD format");
  }
  if (!DAYS.includes(entry.dayOfWeek)) {
    errors.push(`dayOfWeek must be one of: ${DAYS.join(", ")}`);
  }
  if (!entry.published || typeof entry.published.text !== "string" || !entry.published.text) {
    errors.push("published.text is required");
  }
  if (entry.edits && !Array.isArray(entry.edits)) {
    errors.push("edits must be an array");
  }
  if (entry.edits) {
    entry.edits.forEach((edit, i) => {
      if (!EDIT_TYPES.includes(edit.type)) {
        errors.push(`edits[${i}].type must be one of: ${EDIT_TYPES.join(", ")}`);
      }
    });
  }
  if (entry.published && entry.published.media) {
    entry.published.media.forEach((m, i) => {
      if (!MEDIA_TYPES.includes(m.type)) {
        errors.push(`published.media[${i}].type must be one of: ${MEDIA_TYPES.join(", ")}`);
      }
    });
  }

  return { valid: errors.length === 0, errors };
}

// --- Post markdown parser ---

function parsePostMarkdown(content, filePath) {
  const lines = content.split("\n");
  const fileName = path.basename(filePath, ".md");
  const dirName = path.basename(path.dirname(filePath));

  // Extract front matter from markdown headers
  const meta = {};
  const sections = {};
  let currentSection = null;
  let currentLines = [];

  for (const line of lines) {
    const h1 = line.match(/^# Post:\s*(.+)/);
    const h2 = line.match(/^## (.+)/);
    const metaLine = line.match(/^\*\*(.+?):\*\*\s*(.+)/);

    if (h1) {
      meta.title = h1[1].trim();
    } else if (h2) {
      if (currentSection) sections[currentSection] = currentLines.join("\n").trim();
      currentSection = h2[1].trim().toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, "_");
      currentLines = [];
    } else if (metaLine && !currentSection) {
      meta[metaLine[1].toLowerCase()] = metaLine[2].trim();
    } else if (currentSection) {
      currentLines.push(line);
    }
  }
  if (currentSection) sections[currentSection] = currentLines.join("\n").trim();

  // Determine platform from directory
  const platform = PLATFORMS.includes(dirName) ? dirName : PLATFORMS[0];
  const language = LANGUAGES_MAP[platform] || DEFAULT_LANGUAGE;

  // Parse date
  const dateMatch = (meta.date || fileName).match(/(\d{4}-\d{2}-\d{2})/);
  const date = dateMatch ? dateMatch[1] : new Date().toISOString().slice(0, 10);
  const dayOfWeek = DAYS[new Date(date + "T12:00:00Z").getUTCDay()];

  // Parse engagement
  const engagementStr = meta.engagement || "";
  const engagement = {};
  const viewsMatch = engagementStr.match(/(\d+)\s*views?/i);
  const commentsMatch = engagementStr.match(/(\d+)\s*comments?/i);
  if (viewsMatch) engagement.views = parseInt(viewsMatch[1]);
  if (commentsMatch) engagement.comments = parseInt(commentsMatch[1]);

  // Parse reactions from engagement string
  const reactionMatches = engagementStr.matchAll(/(\d+)\s+(\w+)\s+reactions?/gi);
  const reactions = {};
  for (const m of reactionMatches) {
    reactions[m[2].toLowerCase()] = parseInt(m[1]);
  }
  const singleReaction = engagementStr.match(/(\d+)\s+(\w+)\s+reaction\b/i);
  if (singleReaction) {
    reactions[singleReaction[2].toLowerCase()] = parseInt(singleReaction[1]);
  }
  if (Object.keys(reactions).length) engagement.reactions = reactions;

  // Parse published text
  const publishedText = sections.final_published_text || "";

  // Parse media
  const media = [];
  const mediaSection = sections.attached_media || "";
  if (mediaSection) {
    const fileMatch = mediaSection.match(/\*\*File:\*\*\s*(.+)/);
    const typeMatch = mediaSection.match(/\*\*Type:\*\*\s*(.+)/);
    const descMatch = mediaSection.match(/\*\*Content:\*\*\s*(.+)/);
    if (fileMatch) {
      const mediaType = (typeMatch ? typeMatch[1].toLowerCase() : "").split(/\s/)[0];
      media.push({
        type: MEDIA_TYPES.includes(mediaType) ? mediaType : "document",
        file: fileMatch[1].trim().split(/\s/)[0],
        description: descMatch ? descMatch[1].trim() : "",
      });
    }
  }

  // Parse edits from style notes (generic section name)
  const styleNotesKey = Object.keys(sections).find((k) => k.includes("style_notes") || k.includes("edits") || k.includes("changes"));
  const styleNotes = styleNotesKey ? sections[styleNotesKey] : "";
  const edits = [];
  if (styleNotes) {
    for (const line of styleNotes.split("\n")) {
      const trimmed = line.replace(/^-\s*/, "").trim();
      if (!trimmed) continue;

      // "X" -> "Y" pattern (word swap or rephrase)
      const swapMatch = trimmed.match(/"([^"]+)"\s*(?:->|→)\s*"([^"]+)"\s*(?:\((.+)\))?/);
      if (swapMatch) {
        const wordCount = swapMatch[1].split(/\s+/).length;
        edits.push({
          type: wordCount <= 2 ? "word_swap" : "rephrase",
          draft: swapMatch[1],
          final: swapMatch[2],
          reason: swapMatch[3] || "",
        });
        continue;
      }

      // Detect cuts
      if (/removed|dropped|cut/i.test(trimmed)) {
        edits.push({ type: "cut", description: trimmed });
        continue;
      }

      // Detect additions
      if (/added/i.test(trimmed)) {
        const addedText = trimmed.match(/"([^"]+)"/);
        edits.push({
          type: "addition",
          text: addedText ? addedText[1] : "",
          description: trimmed,
        });
        continue;
      }

      // Detect reorders
      if (/moved|reorder/i.test(trimmed)) {
        edits.push({ type: "reorder", description: trimmed });
        continue;
      }

      // Detect rephrases with "vs"
      const vsMatch = trimmed.match(/"([^"]+)"\s*vs\s*(?:my\s*)?"([^"]+)"/);
      if (vsMatch) {
        edits.push({
          type: "rephrase",
          final: vsMatch[1],
          draft: vsMatch[2],
          description: trimmed,
        });
        continue;
      }

      // Fallback: general observation
      if (trimmed.length > 5) {
        edits.push({ type: "tone_shift", description: trimmed });
      }
    }
  }

  // Build entry
  const entry = {
    schemaVersion: SCHEMA_VERSION,
    id: fileName,
    platform,
    language,
    date,
    dayOfWeek,
    published: {
      text: publishedText,
      formatting: [],
      media: media.length ? media : undefined,
    },
    draft: null,
    engagement: Object.keys(engagement).length ? engagement : null,
    edits: edits.length ? edits : [],
    analysis: null,
  };

  // Detect formatting (bold first word is a known pattern)
  const firstWord = publishedText.split(/[\s.!?,]/)[0];
  if (firstWord) {
    entry.published.formatting.push(`bold:${firstWord}`);
  }

  return entry;
}

// --- Factory: create entry from structured input ---

function createEntryFromInput({ platform, date, text, draft, edits, media, engagement }) {
  if (!platform || !date || !text) {
    throw new Error("platform, date, and text are required");
  }

  const language = LANGUAGES_MAP[platform] || DEFAULT_LANGUAGE;
  const dayOfWeek = DAYS[new Date(date + "T12:00:00Z").getUTCDay()];
  const id = `${date}-${platform}-post`;

  const entry = {
    schemaVersion: SCHEMA_VERSION,
    id,
    platform,
    language,
    date,
    dayOfWeek,
    published: {
      text,
      formatting: [],
      media: media || undefined,
    },
    draft: draft || null,
    engagement: engagement || null,
    edits: edits || [],
    analysis: null,
  };

  return entry;
}

// --- File-based factory ---

function createEntry(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const entry = parsePostMarkdown(content, filePath);
  const result = validate(entry);
  if (!result.valid) {
    console.error("Validation errors:", result.errors);
    return null;
  }
  return entry;
}

function saveEntry(entry) {
  fs.mkdirSync(CORPUS_DIR, { recursive: true });
  const outPath = path.join(CORPUS_DIR, `${entry.id}.json`);
  fs.writeFileSync(outPath, JSON.stringify(entry, null, 2) + "\n");
  return outPath;
}

// --- CLI ---

function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (command === "add") {
    const fileIdx = args.indexOf("--file");
    if (fileIdx === -1 || !args[fileIdx + 1]) {
      console.error("Usage: node schema.js add --file <path-to-post.md>");
      process.exit(1);
    }
    const filePath = path.resolve(args[fileIdx + 1]);
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      process.exit(1);
    }

    const entry = createEntry(filePath);
    if (!entry) process.exit(1);

    const outPath = saveEntry(entry);
    console.log(`Entry created: ${outPath}`);
    console.log(`  Platform: ${entry.platform}`);
    console.log(`  Date: ${entry.date} (${entry.dayOfWeek})`);
    console.log(`  Words: ${entry.published.text.split(/\s+/).length}`);
    console.log(`  Edits: ${entry.edits.length}`);
  } else if (command === "validate") {
    const filePath = path.resolve(args[1]);
    const entry = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const result = validate(entry);
    if (result.valid) {
      console.log("Valid.");
    } else {
      console.error("Invalid:");
      result.errors.forEach((e) => console.error(`  - ${e}`));
      process.exit(1);
    }
  } else {
    console.log("Usage:");
    console.log("  node schema.js add --file <path-to-post.md>");
    console.log("  node schema.js validate <path-to-entry.json>");
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  SCHEMA_VERSION,
  PLATFORMS,
  EDIT_TYPES,
  MEDIA_TYPES,
  DAYS,
  validate,
  parsePostMarkdown,
  createEntry,
  createEntryFromInput,
  saveEntry,
};
