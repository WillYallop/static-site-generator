// Loaders
import optionsLoader from "./site/loaders/options";
import homepageLoader from "./site/loaders/homepage";
import { infoLoader, infoParamLookup } from "./site/loaders/info";
// Param Table Lookups
// Types
import { GeneratorConfig, RoutesObj } from "./core/types/config";

const templatesDir = "site/views/templates";

const routes: Array<RoutesObj> = [
  {
    path: "/",
    template: `${templatesDir}/home.liquid`,
    loaders: [homepageLoader],
  },
  {
    path: "/info/:slug",
    template: `${templatesDir}/info-single.liquid`,
    loaders: [infoLoader],
    paramLookup: infoParamLookup,
  },
];

const config: GeneratorConfig = {
  routes,
  globalLoaders: [optionsLoader],
  outputDir: "dist",
  siteRoot: "site",
};
export default config;
