import path from "path";
// import config from "../../../config";

const relativePath = (rootPath: string, assetPath: string) => {
  const relativePath = path.relative(rootPath, "/");
  const resPath = path.join(relativePath, assetPath);
  return resPath.replace(/\\/g, "/");
};
export default relativePath;
