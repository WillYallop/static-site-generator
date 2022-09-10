// Types
import { LoaderFunction, ParamTableLookup } from "../../generator/types/config";
import axios from "axios";

export const blogParamLookup: ParamTableLookup = async () => {
  const res = [];
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  for (let i = 0; i < posts.data.length; i++) {
    res.push({
      slug: posts.data[i].id.toString() as string,
    });
  }
  return res;
};

export const blogLoader: LoaderFunction = async (params) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params?.slug}`
    );
    return {
      blog: res.data,
    };
  } catch (err) {
    return {
      blog: null,
    };
  }
};
