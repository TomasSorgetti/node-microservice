import { Router, Request, Response } from "express";
import { AuthController } from "./controller";

export class Routes {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    this.routes();
  }

  private routes() {
    this.router.get("/health", this.healthCheck);
    this.router.post("/signup", this.authController.register);
    this.router.post("/signin", this.authController.login);
    this.router.get("/verify", this.authController.verify);
  }

  public getRouter() {
    return this.router;
  }

  private healthCheck(req: Request, res: Response) {
    res.send("OK!");
  }
}
