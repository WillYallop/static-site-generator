// Loaders
import homepageLoader from "./theme/loaders/homepage";
import blogLoader from "./theme/loaders/blog";

const templatesDir = "theme/templates";

const routes = [
  {
    path: "/",
    template: `${templatesDir}/home.liquid`,
    loaders: [
      {
        loader: homepageLoader,
        params: {},
        name: "i",
      },
    ],
  },
  {
    path: "/about",
    template: `${templatesDir}/about.liquid`,
  },
  {
    path: "/blog/:slug",
    template: `${templatesDir}/blog.liquid`,
    loaders: [blogLoader],
  },
];

export default routes;
