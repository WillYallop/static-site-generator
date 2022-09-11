import config from "../../config";
import fs from "fs-extra";

const createSitemap = async (loc: Array<string>) => {
  if (loc.length) {
    const date = new Date().toISOString();
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${loc
      ?.map((url) => {
        return `
        <url>
            <loc>${config.siteUrl}${url}</loc>
            <lastmod>${date}</lastmod>
            <priority>${url === "/" ? 0.9 : 0.8}</priority>
        </url>
        `;
      })
      .join("")}
    </urlset>`;
    await fs.outputFile(`${config.outputDir}/sitemap.xml`, sitemap);
  }
};

const saveSite = async (
  routes: {
    path: string;
    html: string;
  }[]
) => {
  const loc = [];
  for await (const route of routes) {
    loc.push(route.path);
    const path = `${config.outputDir}/${route.path}`;
    await fs.outputFile(`${path}/index.html`, route.html);
  }
  await createSitemap(loc);
};

export default saveSite;
