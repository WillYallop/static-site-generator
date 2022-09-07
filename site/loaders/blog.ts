// Types
import { LoaderFunction } from "../../generator/types/config";

const blogLoader: LoaderFunction = async (params) => {
  return {
    blog: {
      slug: params?.slug,
    },
  };
};

export default blogLoader;
