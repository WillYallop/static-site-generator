import { Liquid } from "liquidjs";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export const registerMarkdownFilter = (engine: Liquid) => {
  engine.registerFilter("markdown", (str) => {
    return md.render(str);
  });
};
export default registerMarkdownFilter;
