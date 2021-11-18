import express from "express";
import bodyParser from "body-parser";

const createApp = () => {
  const app = express();
  app.use(bodyParser.json());

  app.get("/", (req, res) => {
    res.send("Hello Worl!");
  });

  return app;
}

export default createApp;