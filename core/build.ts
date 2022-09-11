import config from "../config";
import fs from "fs-extra";
import clc from "cli-color";
// Utils
import buildRoutes from "./util/build-routes";
import saveSite from "./util/save-site";

// Log build time and size
const finishLog = async (startTime: number) => {
  // get the weight of the dist directory
  const distSize = fs.statSync(config.outputDir).size;
  console.log(
    clc.green(
      "-------------------------------------------------------------------------------------"
    )
  );
  console.log(
    clc.green(
      clc.bold(
        `Built Site - It took ${
          Math.abs(startTime - new Date().getTime()) / 1000
        } seconds!`
      )
    )
  );
  console.log(
    clc.green(clc.bold(`Total site size: ${Math.round(distSize / 1000)}kb`))
  );
  console.log(
    clc.green(
      "-------------------------------------------------------------------------------------"
    )
  );
};

const buildSite = async () => {
  const startTime = new Date().getTime();
  await saveSite(await buildRoutes());
  await finishLog(startTime);
  process.exit();
};
buildSite();
