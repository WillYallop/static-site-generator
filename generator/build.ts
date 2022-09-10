import config from "../config";
import fs from "fs-extra";
import { minify } from "html-minifier-terser";
import clc from "cli-color";
// Utils
import renderRoute from "./util/render-route";

// Build every route
const buildRoutes = async () => {
  console.log(
    clc.yellowBright(
      "-------------------------------------------------------------------------------------"
    )
  );
  const routes = [];
  for await (const route of config.routes) {
    if (route) {
      if (route.path.includes(":") && route.paramLookup !== undefined) {
        let paramTableResults = [];
        // set the paramtable results based on the paramtable type
        if (typeof route.paramLookup === "function")
          paramTableResults = await route.paramLookup();
        else paramTableResults = route.paramLookup;
        // loop through the paramtable results and build the routes
        for await (const paramTableResult of paramTableResults) {
          const html = await minify(
            await renderRoute(route, paramTableResult),
            {
              collapseWhitespace: true,
              removeComments: true,
              sortAttributes: true,
              sortClassName: true,
            }
          );
          const pagePage = route.path.replace(/:\w+/g, (match) => {
            const finPath = paramTableResult[match.replace(":", "")];
            return finPath || route.path;
          });
          routes.push({
            path: pagePage,
            html,
          });
          console.log(clc.yellowBright(`Page Built: ${pagePage}`));
          continue;
        }
      } else {
        const html = await minify(await renderRoute(route), {
          collapseWhitespace: true,
          removeComments: true,
          sortAttributes: true,
          sortClassName: true,
        });
        routes.push({ path: route.path, html });
        console.log(clc.yellowBright(`Page Built: ${route.path}`));
        continue;
      }
    }
  }
  console.log(
    clc.yellowBright(
      "-------------------------------------------------------------------------------------"
    )
  );
  return routes;
  ``;
};

// Save the routes to the filesystem
const saveRoutes = async (
  routes: {
    path: string;
    html: string;
  }[]
) => {
  for await (const route of routes) {
    const path = `${config.outputDir}/${route.path}`;
    await fs.outputFile(`${path}/index.html`, route.html);
  }
};

// Log build time and size
const finishLog = async (startTime: number) => {
  // get the weight of the dist directory
  const distSize = fs.statSync(config.outputDir).size;
  console.log(
    clc.green(
      "-------------------------------------------------------------------------------------"
    )
  );
  console.log(
    clc.green(
      clc.bold(
        `Built Site - It took ${
          Math.abs(startTime - new Date().getTime()) / 1000
        } seconds!`
      )
    )
  );
  console.log(
    clc.green(clc.bold(`Total site size: ${Math.round(distSize / 1000)}kb`))
  );
  console.log(
    clc.green(
      "-------------------------------------------------------------------------------------"
    )
  );
};

const buildSite = async () => {
  const startTime = new Date().getTime();
  await saveRoutes(await buildRoutes());
  await finishLog(startTime);
  process.exit();
};
buildSite();
