// Loaders
import homepageLoader from "./theme/loaders/homepage";
import blogLoader from "./theme/loaders/blog";
// Types
import { RoutesObj } from "./core/types/config";

const templatesDir = "./theme/templates";

const routes: Array<RoutesObj> = [
  {
    path: "/",
    template: `${templatesDir}/home.liquid`,
    loaders: [homepageLoader],
  },
  {
    path: "/blog/:slug",
    template: `${templatesDir}/blog.liquid`,
    loaders: [blogLoader],
  },
];

export default routes;
