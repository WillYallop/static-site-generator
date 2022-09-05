// Routes
import routes from "./routes";
// Loaders
import optionsLoader from "./theme/loaders/options";

export default {
  routes,
  globalLoaders: [optionsLoader],
  staticDir: "static",
  outputDir: "dist",
};
