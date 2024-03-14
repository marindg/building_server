import { execute } from "@/utils/index";
import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.send("Bienvenue sur notre API!");
});

router.get(
  "/test",
  async (_req: Request, res: Response) => {
    try {
      const user = await execute("getUser");
      res.json(user);
    } catch (error) {
      console.error("Error fetching test", { error });
      res.status(500).json({ error });
    }
  }
);

export default router;
