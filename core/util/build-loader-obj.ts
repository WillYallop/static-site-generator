import { Request } from "express";
import merge from "lodash.merge";
// Types
import { LoaderFunction } from "../types/config";

const buildLoaderObj = async (
  loaders?: Array<LoaderFunction>,
  params?: Request["params"]
) => {
  let loaderData: any = {};
  if (loaders !== undefined) {
    for await (const loader of loaders) {
      loaderData = merge(loaderData, await loader(params));
    }
  }
  return loaderData;
};
export default buildLoaderObj;
