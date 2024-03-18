import { checkDatabaseConnection } from "@/database/database";
import router from "@/routes/index";
import dotenv from "dotenv";
import express, { Express } from "express";

import swaggerDocs from "@/utils/swagger";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/", router);
swaggerDocs(app);

app.listen(port, () => {
  checkDatabaseConnection();
  console.log(
    `⚡️[server]: Server is running at http://localhost:${port}`
  );
});
