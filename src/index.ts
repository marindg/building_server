import dotenv from "dotenv";
import express, { Express } from "express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${port}`
  );
});
