import fs from "fs-extra";
import path from "path";
// Types
import { LoaderFunction, ParamTableLookup } from "../../core/types/config";

export const infoParamLookup: ParamTableLookup = async () => {
  return [
    {
      slug: "config",
    },
    {
      slug: "tags-and-filters",
    },
    {
      slug: "loaders",
    },
    {
      slug: "params",
    },
    {
      slug: "paths",
    },
  ];
};

export const infoLoader: LoaderFunction = async (params) => {
  const infoContent = {
    info: {
      content: {
        title: "",
        markdown: "",
      },
    },
  };

  if (params !== undefined) {
    switch (params.slug) {
      case "config": {
        // get the content of the file config.md
        infoContent.info.content.title = "Config";
        infoContent.info.content.markdown = await fs.readFile(
          path.resolve(__dirname, "../../core/markdown/config.md"),
          "utf8"
        );
        break;
      }
      case "tags-and-filters":
        infoContent.info.content.title = "Tags & Filters";
        infoContent.info.content.markdown = await fs.readFile(
          path.resolve(__dirname, "../../core/markdown/tags-and-filters.md"),
          "utf8"
        );
        break;
      case "loaders":
        infoContent.info.content.title = "Loaders";
        infoContent.info.content.markdown = await fs.readFile(
          path.resolve(__dirname, "../../core/markdown/loaders.md"),
          "utf8"
        );
        break;
      case "params":
        infoContent.info.content.title = "Params";
        infoContent.info.content.markdown = await fs.readFile(
          path.resolve(__dirname, "../../core/markdown/params.md"),
          "utf8"
        );
        break;
      case "paths":
        infoContent.info.content.title = "Paths";
        infoContent.info.content.markdown = await fs.readFile(
          path.resolve(__dirname, "../../core/markdown/paths.md"),
          "utf8"
        );
        break;
    }
  }

  return infoContent;
};
