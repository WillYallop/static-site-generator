import http from "http";
import express from "express";
import morgan from "morgan";
import config from "../config";
// Utils
import renderRoute from "./util/render-route";
import checkParamMatch from "./util/check-param-match";
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
    const pageFound = await checkParamMatch(route, req.params);
    if (pageFound) res.send(await renderRoute(route, req.params));
    else res.send("404");
  });
});
app.use("/", express.static(config.outputDir));

// return 404 if no route is matched
app.use((req, res) => {
  res.status(404).send("404");
});

// ------------------------------------
// START SERVER
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
server.on("listening", () => {
  console.log(`Server is live at http://localhost:${port}`);
});
