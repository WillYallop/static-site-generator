import path from "path";
// Routes
import routes from "./routes";
// Loaders
import optionsLoader from "./theme/loaders/options";
// Types
import { GeneratorConfig } from "./core/types/config";

const config: GeneratorConfig = {
  routes,
  globalLoaders: [optionsLoader],
  staticDir: path.resolve("static"),
  outputDir: path.resolve("dist"),
  liquidRoot: path.resolve("theme"),
  liquidViews: ["theme/templates"],
};
export default config;
