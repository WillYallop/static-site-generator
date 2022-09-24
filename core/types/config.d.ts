import { Request } from "express";

export type LoaderFunction = (params?: Request["params"]) => Promise<any>;

export type ParamTableLookup = () => Promise<Array<{ [key: string]: string }>>;

export interface RoutesObj {
  path: string;
  template: string;
  loaders?: Array<LoaderFunction>;
  paramLookup?:
    | Array<{
        [key: string]: string;
      }>
    | ParamTableLookup;
}

export interface GeneratorConfig {
  routes: Array<RoutesObj>;
  globalLoaders?: Array<LoaderFunction>;
  outputDir: string;
  siteRoot: string;
  siteUrl: string;

  images: {
    directory: string;
    outputDir: string;
    quality?: number;
  };
}
