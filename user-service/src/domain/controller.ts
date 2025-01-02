import { NextFunction, Request, Response } from "express";
import { UserService } from "./services";

export class UserController {
  public async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, name, lastname } = req.body;
      const response = await UserService.register({
        email,
        name,
        lastname,
      });
      res.status(201).json({ response });
    } catch (error: any) {
      next(error);
    }
  }
}
