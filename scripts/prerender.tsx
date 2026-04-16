import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToString } from "react-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type FilledContext } from "@/lib/helmet";
import AppRoutes from "../src/AppRoutes";
import { prerenderRoutes } from "../src/routes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const templatePath = path.join(distDir, "index.html");

const stripTemplateSeo = (html: string) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta name="description"[^>]*>\s*/i, "")
    .replace(/<link rel="canonical"[^>]*>\s*/i, "")
    .replace(/<meta property="og:title"[^>]*>\s*/i, "")
    .replace(/<meta property="og:description"[^>]*>\s*/i, "")
    .replace(/<meta property="og:type"[^>]*>\s*/i, "")
    .replace(/<meta property="og:url"[^>]*>\s*/i, "");

const injectRenderedPage = (template: string, route: string) => {
  const helmetContext = {} as FilledContext;
  const queryClient = new QueryClient();
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={route}>
          <AppRoutes />
        </StaticRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet;
  if (!helmet) {
    throw new Error(`Helmet context missing for route ${route}`);
  }

  const cleanedTemplate = stripTemplateSeo(template);
  const headMarkup = [
    helmet.title.toString(),
    helmet.priority?.toString() ?? "",
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join("\n");

  return cleanedTemplate
    .replace("<div id=\"root\"></div>", `<div id=\"root\">${appHtml}</div>`)
    .replace("</head>", `${headMarkup}\n  </head>`);
};

const routeToFilePath = (route: string) =>
  route === "/"
    ? path.join(distDir, "index.html")
    : path.join(distDir, route.slice(1), "index.html");

const main = async () => {
  const template = await fs.readFile(templatePath, "utf8");

  for (const route of prerenderRoutes) {
    const outputPath = routeToFilePath(route);
    const html = injectRenderedPage(template, route);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, html, "utf8");
  }

  console.log(`✓ Prerendered ${prerenderRoutes.length} routes`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
