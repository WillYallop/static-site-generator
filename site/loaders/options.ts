// get the package.json file
import packageJson from "../../package.json";

const optionsLoader = async () => {
  return {
    options: {
      version: packageJson.version,
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
