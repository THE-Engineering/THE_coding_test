import express from "express";
import { json } from "body-parser";
import cors from 'cors';

const createApp = () => {
  const app = express();
  app.use(json());
  app.use(cors())

  app.get("/", (req, res) => {
    res.send("Hello Worl!");
  });

  return app;
}

export default createApp;