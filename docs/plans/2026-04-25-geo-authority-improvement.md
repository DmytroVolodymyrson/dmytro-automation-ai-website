# GEO Authority Improvement Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve dmytroai.com category visibility in answer engines by prioritizing indexed/discovered pages, clarifying the entity, strengthening hubs, and building citation-worthy proof around the best commercial clusters.

**Architecture:** Use Google Search Console as the indexing diagnostic layer, then improve entity schema, hub/internal-link structure, and external corroboration for a bounded priority URL set. Keep GEO measurement separated into branded visibility and unbranded commercial visibility.

**Tech Stack:** Vite, React, TypeScript, schema.org JSON-LD, static sitemap/robots/llm files, Google Search Console, existing GEO runner.

---

## Current baseline
- GSC sitemap submission is successful for `https://www.dmytroai.com/sitemap.xml`.
- GSC screenshot shows 320 discovered pages, status Success, last read Apr 25, 2026.
- Live `robots.txt` and `sitemap.xml` are reachable and sitemap is linked from robots.
- Branded GEO visibility exists, but unbranded commercial category visibility is still weak.

## Phase order
1. Create `docs/geo-priority-urls.md` with a bounded priority 25 URL set and GSC/GEO status columns.
2. Strengthen homepage entity schema and crawler-facing identity files.
3. Strengthen `/guides` and cluster hubs.
4. Improve top 10 commercial pages with proof, internal links, and source-worthy details.
5. Create external citation assets for priority clusters.
6. Split weekly reporting into branded vs category visibility.
7. Review GSC + GEO weekly.
