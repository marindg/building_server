import { checkDatabaseConnection } from "@/database/database";
import router from "@/routes/index";
import dotenv from "dotenv";
import express, { Express } from "express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use("/", router);

app.listen(port, () => {
  checkDatabaseConnection();
  console.log(
    `⚡️[server]: Server is running at http://localhost:${port}`
  );
});
