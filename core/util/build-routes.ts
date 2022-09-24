import config from "../../config";
import { minify } from "html-minifier-terser";
import clc from "cli-color";
// Utils
import renderRoute from "./render-route";

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
            await renderRoute(route, "prod", paramTableResult),
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
        const html = await minify(await renderRoute(route, "prod"), {
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

export default buildRoutes;
