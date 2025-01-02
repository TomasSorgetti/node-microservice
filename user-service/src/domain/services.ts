import { IRegisterParams } from "./interfaces/auth.interface";
import { UserRepository } from "../database/repositories/user.repository";
import { APIError, BadRequestError } from "../utils/app-errors";

export class UserService {
  public static async register({ email, name, lastname }: IRegisterParams) {
    const existingUser = await UserRepository.findByEmail(email);
    if (existingUser) {
      throw new BadRequestError("User already exists");
    }
    const authUser = await UserRepository.createUser(email, name, lastname);
    if (!authUser) throw new APIError("Error creating user");
    return authUser;
  }
}
