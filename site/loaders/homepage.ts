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
            "Understanding SSG's config file and how it's used to generate your site.",
          link: "/info/config",
        },
        {
          title: "Routes",
          summary:
            "Learn how to define simple routes with loaders, and create pages with path parameters.",
          link: "/info/routes",
        },
        {
          title: "Tags & Filters",
          summary:
            "Learn about what SSG’s custom LiquidJS tags and filters do and how to use them.",
          link: "/info/tags-and-filters",
        },
        {
          title: "Github",
          summary:
            "Checkout the source code on GitHub and contribute to the project.",
          link: "https://github.com/WillYallop/static-site-generator",
        },
      ],
    },
  };
};

export default homepageLoader;
