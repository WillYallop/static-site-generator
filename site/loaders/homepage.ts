const homepageLoader = async () => {
  return {
    home: {
      seo: {
        title: "SSG Homepage",
      },
      rows: [
        {
          title: "Config",
          summary:
            "Understanding SSG's config file and how its used to generate your site.",
          link: "/info/config",
        },
        {
          title: "Tags & Filters",
          summary:
            "Learn about what SSG’s custom LiquidJS tags and filters do and how to use them.",
          link: "/info/tags-and-filters",
        },
        {
          title: "Loaders",
          summary:
            "Learn about SSG's route loaders, how they work, and how to use them.",
          link: "/info/loaders",
        },
        {
          title: "Param Lookup",
          summary:
            "Learn what the paramLookup property is and how it is used within the build script.",
          link: "/info/params",
        },
        {
          title: "Paths",
          summary:
            "Get an overview on route paths, how to define path parameters, and what they are used for.",
          link: "/info/paths",
        },
        {
          title: "Github",
          summary:
            "Checkout the source code on Github and contribute to the project.",
          link: "https://github.com/WillYallop/static-site-generator",
        },
      ],
    },
  };
};

export default homepageLoader;
