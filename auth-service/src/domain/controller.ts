import { NextFunction, Request, Response } from "express";
import { AuthService } from "./services";

export class AuthController {
  public async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, name, lastname } = req.body;
      const response = await AuthService.register({
        email,
        password,
        name,
        lastname,
      });
      res.status(201).json(response);
    } catch (error: any) {
      next(error);
    }
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, rememberme } = req.body;
      const response = await AuthService.login({ email, password, rememberme });
      res.status(200).json({ response });
    } catch (error: any) {
      next(error);
    }
  }

  public async verify(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await AuthService.verify();
      res.status(200).json({ response });
    } catch (error: any) {
      next(error);
    }
  }
}
