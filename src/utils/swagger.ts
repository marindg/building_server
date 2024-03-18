import { Express, Request, Response } from "express";
import path from "path";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from "../../package.json";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Docs",
      version,
    },
    servers: [
      {
        url: "http://localhost:3003/",
        description: "DEV server",
      },
    ],
  },
  apis: [path.join(__dirname, "..", "docs", "*.yml")],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express) {
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
  );

  app.get("/docs.json", (_req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}

export default swaggerDocs;
