/*  
    Example loader file - delete and replace as needed.

    Desc:
    The infoParamLookup tells the generator all of the page path variations.
    The infoLoader returns data for the info route to its template to use.
*/

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
      slug: "routes",
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
      case "routes":
        infoContent.info.content.title = "Routes";
        infoContent.info.content.markdown = await fs.readFile(
          path.resolve(__dirname, "../../core/markdown/routes.md"),
          "utf8"
        );
        break;
    }
  }

  return infoContent;
};
