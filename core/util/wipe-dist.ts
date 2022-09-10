import fs from "fs-extra";
import config from "../../config";

const wipeDistDir = async () => {
  await fs.emptyDir(config.outputDir);
};
wipeDistDir();
