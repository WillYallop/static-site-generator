let mix = require("laravel-mix");

const siteRoot = "site";
const outputDir = "dist";

mix.disableNotifications();

mix
  .ts(`${siteRoot}/resources/ts/index.ts`, `${outputDir}/js`)
  .sass(`${siteRoot}/resources/scss/main.scss`, `${outputDir}/css`)
  .copyDirectory(`${siteRoot}/static`, outputDir);
