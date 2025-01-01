import { IRegisterParams } from "./interfaces/auth.interface";
import { UserRepository } from "../database/repositories/user.repository";

export class UserService {
  public static async register({ email, name, lastname }: IRegisterParams) {
    const existingUser = await UserRepository.findByEmail(email);
    if (existingUser) {
      throw new Error("User already exists");
    }
    const authUser = await UserRepository.createUser(email, name, lastname);
    if (!authUser) throw new Error("Error creating user");
    return authUser;
  }
}
