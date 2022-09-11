/*  
    Example loader file - delete and replace as needed.

    Desc:
    An example globalLoader to pass some shared data to all routes and their templates
*/

// get the package.json file
import packageJson from "../../package.json";
// Types
import { LoaderFunction } from "../../core/types/config";

const optionsLoader: LoaderFunction = async (params) => {
  return {
    options: {
      version: packageJson.version,
      title: 'Welcome to <span class="highlight">SSG</span>',
      subtitle:
        'Get started by editing <span class="code-block">config.ts</span>',
      menu: [
        {
          title: "Home",
          link: "/",
        },
        {
          title: "Blog",
          link: "/blog",
        },
      ],
    },
  };
};

export default optionsLoader;
