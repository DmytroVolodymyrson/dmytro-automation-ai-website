import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { appRoutes, prerenderRoutes } from "../src/routes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const sitemapPath = path.join(rootDir, "public", "sitemap.xml");

const ignoredPaths = new Set(["*", "/ai-automation-hvac"]);
const expectedIndexableRoutes = appRoutes
  .map((route) => route.path)
  .filter((route) => !ignoredPaths.has(route));

const normalize = (value: string) => value.replace(/\/$/, "") || "/";

const main = async () => {
  const sitemapXml = await fs.readFile(sitemapPath, "utf8");
  const sitemapRoutes = [...sitemapXml.matchAll(/<loc>https:\/\/www\.dmytroai\.com([^<]*)<\/loc>/g)]
    .map((match) => normalize(match[1] || "/"));

  const missingFromPrerender = expectedIndexableRoutes.filter(
    (route) => !prerenderRoutes.includes(route)
  );
  const missingFromSitemap = expectedIndexableRoutes.filter(
    (route) => !sitemapRoutes.includes(normalize(route))
  );

  if (missingFromPrerender.length || missingFromSitemap.length) {
    if (missingFromPrerender.length) {
      console.error("Missing from prerenderRoutes:", missingFromPrerender.join(", "));
    }
    if (missingFromSitemap.length) {
      console.error("Missing from sitemap.xml:", missingFromSitemap.join(", "));
    }
    process.exit(1);
  }

  console.log(`✓ Route coverage OK (${expectedIndexableRoutes.length} indexable routes)`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
