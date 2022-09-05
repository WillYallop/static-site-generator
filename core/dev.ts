import http from "http";
import express from "express";
import morgan from "morgan";

const app = express();

// ------------------------------------
// MIDDLEWARE
app.use(morgan("dev"));

// ------------------------------------
// ENGINE

// ------------------------------------
// ERROR HANDLING
app.use((req, res, next) => {
  const error = new Error("Not Found");
  next(error);
});
app.use((error: any, req: any, res: any, next: any) => {
  res.status(error.status || 500);
  res.send(`404`);
});

// ------------------------------------
// START SERVER
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
server.on("listening", () => {
  console.log(`Server is live at http://localhost:${port}`);
});
