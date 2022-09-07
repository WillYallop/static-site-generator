import { Request } from "express";

export type LoaderFunction = (params?: Request["params"]) => Promise<any>;

export interface RoutesObj {
  path: string;
  template: string;
  loaders?: Array<LoaderFunction>;
}

export interface GeneratorConfig {
  routes: Array<RoutesObj>;
  globalLoaders?: Array<LoaderFunction>;
  outputDir: string;
  siteRoot: string;
  liquidViews: Array<string>;
}
