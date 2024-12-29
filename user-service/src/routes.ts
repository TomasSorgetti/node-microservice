import { Router, Request, Response } from "express";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  res.send("OK!");
});

router.get("/me", (req: Request, res: Response) => {
  res.send("User Data!");
});

router.post("/register", (req: Request, res: Response) => {
  res.send("Sign up!");
});

export default router;
