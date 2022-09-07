import { Liquid, TagToken, Context, Emitter, TopLevelToken } from "liquidjs";
import relativePath from "./helper/relative_path";

export const registerAssetTag = (engine: Liquid, rootPath: string) => {
  return engine.registerTag("asset", {
    parse: function (tagToken: TagToken, remainTokens: TopLevelToken[]) {
      const assetPath = tagToken.args.replaceAll('"', "");
      this.assetSrc = `"${relativePath(rootPath, assetPath)}"`;
    },
    render: async function (ctx: Context, emitter: Emitter) {
      emitter.write(this.assetSrc);
    },
  });
};
export default registerAssetTag;
