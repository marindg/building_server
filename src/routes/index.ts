import userRouter from "@/routes/user.route";
import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.send("Bienvenue sur notre API!");
});

router.use("/user", userRouter);

export default router;
