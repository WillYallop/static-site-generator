import { Request } from "express";
import { Liquid } from "liquidjs";
import merge from "lodash.merge";
import path from "path";
import config from "../../config";
// Util
import buildLoaderObj from "./build-loader-obj";
// Tags
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
  const globalData = await buildLoaderObj(config.globalLoaders);
  const routeData = merge(globalData, await buildLoaderObj(loaders, params));
  return await engine.renderFile(template, routeData);
};

export default renderRoute;
