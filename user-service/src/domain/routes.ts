import { Router, Request, Response } from "express";
import { UserController } from "./controller";

export class Routes {
  private router: Router;
  private userController: UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.routes();
  }

  private routes() {
    this.router.get("/health", this.healthCheck);
    this.router.post("/signup", this.userController.register);
  }

  public getRouter() {
    return this.router;
  }

  private healthCheck(req: Request, res: Response) {
    res.send("OK!");
  }
}
