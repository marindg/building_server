import userRouter from "@/routes/user.route";
import { Request, Response, Router } from "express";

const router = Router();

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Votre résumé ici
 *     description: Votre description ici
 *     responses:
 *       200:
 *         description: Description de la réponse
 */

router.get("/", (_req: Request, res: Response) => {
  res.send("Bienvenue sur notre API!");
});

router.use("/user", userRouter);

export default router;
