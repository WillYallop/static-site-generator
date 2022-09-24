import { Liquid } from "liquidjs";
import config from "../../config";
import processImage from "./helper/process-image";
import relativePath from "./helper/relative-path";

export const registerOptimiseImageFilter = (
  engine: Liquid,
  rootPath: string,
  mode: "dev" | "prod" = "dev"
) => {
  engine.registerFilter("optimiseImage", async (src, format, width) => {
    const imagePath = await processImage(src, mode, format, width);
    return relativePath(rootPath, `${config.images.outputDir}/${imagePath}`);
  });
};
export default registerOptimiseImageFilter;
