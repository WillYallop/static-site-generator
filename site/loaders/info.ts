// Types
import { LoaderFunction, ParamTableLookup } from "../../generator/types/config";

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
        body: "",
      },
    },
  };

  if (params !== undefined) {
    switch (params.slug) {
      case "config":
        infoContent.info.content.title = "Config";
        infoContent.info.content.body = ``;
        break;
      case "tags-and-filters":
        infoContent.info.content.title = "Tags & Filters";
        infoContent.info.content.body = ``;
        break;
      case "loaders":
        infoContent.info.content.title = "Loaders";
        infoContent.info.content.body = ``;
        break;
      case "params":
        infoContent.info.content.title = "Params";
        infoContent.info.content.body = ``;
        break;
      case "paths":
        infoContent.info.content.title = "Paths";
        infoContent.info.content.body = ``;
        break;
      default:
        return {};
    }
  }

  return infoContent;
};
