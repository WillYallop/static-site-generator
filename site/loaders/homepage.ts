const homepageLoader = async () => {
  return {
    home: {
      seo: {
        title: "SSG Homepage",
      },
      title: 'Welcome to <span class="highlight">SSG</span>',
      subtitle:
        'Get started by editing <span class="code-block">config.ts</span>',
      rows: [
        {
          title: "Config",
          summary:
            "Learn about what SSG’s custom LiquidJS tags do and how to use them.",
          link: "",
        },
        {
          title: "Tags",
          summary:
            "Learn about what SSG’s custom LiquidJS tags do and how to use them.",
          link: "",
        },
        {
          title: "Loaders",
          summary:
            "Learn about what SSG’s custom LiquidJS tags do and how to use them.",
          link: "",
        },
        {
          title: "Param Lookup",
          summary:
            "Learn about what SSG’s custom LiquidJS tags do and how to use them.",
          link: "",
        },
        {
          title: "Paths",
          summary:
            "Learn about what SSG’s custom LiquidJS tags do and how to use them.",
          link: "",
        },
        {
          title: "Github",
          summary:
            "Checkout the source code on Github and contribute to the project.",
          link: "",
        },
      ],
    },
  };
};

export default homepageLoader;
