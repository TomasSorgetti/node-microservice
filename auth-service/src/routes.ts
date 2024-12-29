import { Router, Request, Response } from "express";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  res.send("OK!");
});

router.post("/signup", (req: Request, res: Response) => {
  res.send("Sign up!");
});

router.post("/signin", (req: Request, res: Response) => {
  res.send("Sign in!");
});

router.post("/verify", (req: Request, res: Response) => {
  res.send("Verify!");
});

export default router;
