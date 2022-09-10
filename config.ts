// Loaders
import optionsLoader from "./site/loaders/options";
import homepageLoader from "./site/loaders/homepage";
import blogsLoader from "./site/loaders/blogs";
import { blogLoader, blogParamLookup } from "./site/loaders/blog-single";
// Param Table Lookups
// Types
import { GeneratorConfig, RoutesObj } from "./generator/types/config";

const templatesDir = "site/views/templates";

const routes: Array<RoutesObj> = [
  {
    path: "/",
    template: `${templatesDir}/home.liquid`,
    loaders: [homepageLoader],
  },
  {
    path: "/blog",
    template: `${templatesDir}/blogs.liquid`,
    loaders: [blogsLoader],
  },
  {
    path: "/blog/:slug",
    template: `${templatesDir}/blog-single.liquid`,
    loaders: [blogLoader],
    paramLookup: blogParamLookup,
  },
];

const config: GeneratorConfig = {
  routes,
  globalLoaders: [optionsLoader],
  outputDir: "dist",
  siteRoot: "site",
};
export default config;
