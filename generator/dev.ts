import http from "http";
import express from "express";
import morgan from "morgan";
import config from "../config";
// Utils
import renderRoute from "./util/render-route";
// Types
import { RoutesObj } from "./types/config";

const app = express();

// ------------------------------------
// MIDDLEWARE
app.use(morgan("dev"));

// ------------------------------------
// ROUTES
config.routes.forEach((route: RoutesObj) => {
  app.get(route.path, async (req, res) => {
    res.send(await renderRoute(route, req.params));
  });
});
app.use("/", express.static(config.outputDir));

// ------------------------------------
// START SERVER
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
server.on("listening", () => {
  console.log(`Server is live at http://localhost:${port}`);
});
