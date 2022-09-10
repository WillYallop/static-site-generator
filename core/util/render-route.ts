import { Request } from "express";
import { Liquid } from "liquidjs";
import merge from "lodash.merge";
import path from "path";
import config from "../../config";
// Util
import buildLoaderObj from "./build-loader-obj";
// Tags
// Filters
import registerMarkdownFilter from "../filters/markdown";
import registerRelativeAssetFilter from "../filters/relative-asset";
// Types
import { RoutesObj } from "../types/config";

// Register a new liquid engine
const engine = new Liquid({
  root: path.resolve(__dirname, "../../"),
  cache: false,
  extname: ".liquid",
  strictVariables: false,
  strictFilters: false,
});

const renderRoute = async (
  route: RoutesObj,
  params?: Request["params"]
): Promise<string> => {
  const { template, loaders } = route;

  // register custom filters
  registerMarkdownFilter(engine);
  registerRelativeAssetFilter(engine, route.path);

  return await engine.renderFile(
    template,
    merge(
      await buildLoaderObj(config.globalLoaders),
      await buildLoaderObj(loaders, params)
    )
  );
};

export default renderRoute;
