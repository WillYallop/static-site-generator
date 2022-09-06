// Types
import { LoaderFunction } from "../../core/types/config";

const blogLoader: LoaderFunction = async (params) => {
  return {
    blog: {
      slug: params?.slug,
    },
  };
};

export default blogLoader;
