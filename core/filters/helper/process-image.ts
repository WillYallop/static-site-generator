import sharp from "sharp";
import fs from "fs-extra";
import config from "../../../config";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const DEFAULT_QUALITY = 80;

const imageName = (
  src: string,
  isLocal: boolean,
  mode: "prod" | "dev",
  format: string,
  width?: number
) => {
  // strip the file extension
  const name = src.split(".").slice(0, -1).join(".").split("/").pop();
  const widthName = width ? `-${width}` : "";
  if (mode === "prod") {
    return `${uuidv4()}${widthName}.${format}`;
  }
  return `${name}${widthName}.${format}`;
};

const optimiseImage = async (
  src: string,
  isLocal: boolean,
  mode: "prod" | "dev",
  format: string,
  width?: number
) => {
  let imgSrc: string | Buffer = src;
  if (!isLocal) {
    // get image buffer from external src
    const response = await fetch(src);
    const arrayBuffer = await response.arrayBuffer();
    imgSrc = Buffer.from(arrayBuffer);
  } else imgSrc = path.resolve(config.images.directory, src);

  const image = sharp(imgSrc);
  if (width) image.resize(width);
  if (format) {
    if (format === "webp")
      image.webp({
        quality: config.images.quality || DEFAULT_QUALITY,
      });
    if (format === "avif")
      image.avif({
        quality: config.images.quality || DEFAULT_QUALITY,
      });
    if (format === "jpeg")
      image.jpeg({
        quality: config.images.quality || DEFAULT_QUALITY,
      });
    if (format === "png")
      image.png({
        quality: config.images.quality || DEFAULT_QUALITY,
      });
  }
  // optimise
  const optimisedImage = await image.toBuffer();
  // output
  const name = imageName(src, isLocal, mode, format, width);
  const outputPath = path.resolve(
    config.outputDir,
    config.images.outputDir,
    name
  );
  await fs.outputFile(outputPath, optimisedImage);
  return name;
};

const checkIfProcessed = async (
  src: string,
  isLocal: boolean,
  format: string,
  width?: number
) => {
  const name = imageName(src, isLocal, "dev", format, width);
  const imgSrc = path.resolve(config.outputDir, config.images.outputDir, name);
  if (fs.existsSync(imgSrc)) return name;
  return false;
};

const processImage = async (
  src: string,
  mode: "prod" | "dev",
  format: string,
  width?: number
) => {
  // check if the src is local or remote
  if (
    format !== "webp" &&
    format !== "avif" &&
    format !== "jpeg" &&
    format !== "png"
  )
    return "INVALID FORMAT";
  // check if the image is local or extenal
  const isLocal = src.startsWith("http") ? false : true;
  // set the image path and check if it exists if local
  if (isLocal) {
    const imgSrc = path.resolve(config.images.directory, src);
    if (!fs.existsSync(imgSrc)) return "SOURCE IMAGE NOT FOUND";
  }
  // if dev only optimise if it hasnt been optimised before, otherwise return the optimised image
  if (mode === "dev") {
    const processed = await checkIfProcessed(src, isLocal, format, width);
    if (typeof processed === "string") return processed;
  }

  return await optimiseImage(src, isLocal, mode, format, width);
};

export default processImage;
