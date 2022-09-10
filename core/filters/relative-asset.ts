import { Liquid } from "liquidjs";
import relativePath from "./helper/relative_path";

export const registerRelativeAssetFilter = (
  engine: Liquid,
  rootPath: string
) => {
  engine.registerFilter("relativeAsset", (value) => {
    return relativePath(rootPath, value);
  });
};
export default registerRelativeAssetFilter;
