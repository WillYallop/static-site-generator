// Loaders
import optionsLoader from "./site/loaders/options";
import homepageLoader from "./site/loaders/homepage";
import blogLoader from "./site/loaders/blog";
// Types
import { GeneratorConfig, RoutesObj } from "./generator/types/config";

const templatesDir = "site/templates";

const routes: Array<RoutesObj> = [
  {
    path: "/",
    template: `${templatesDir}/home.liquid`,
    loaders: [homepageLoader],
  },
  {
    path: "/blog/:slug",
    template: `${templatesDir}/blog.liquid`,
    loaders: [blogLoader],
  },
];

const config: GeneratorConfig = {
  routes,
  globalLoaders: [optionsLoader],
  outputDir: "dist",
  siteRoot: "site",
  liquidViews: [templatesDir],
};
export default config;
