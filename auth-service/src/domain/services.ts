import axios from "axios";
import { IRegisterParams, ILoginParams } from "./interfaces/auth.interface";
import { UserRepository } from "../database/repositories/user.repository";

export class AuthService {
  public static async register({
    email,
    password,
    name,
    lastname,
  }: IRegisterParams) {
    const existingUser = await UserRepository.findByEmail(email);
    if (existingUser) {
      throw new Error("User already exists");
    }
    const authUser = await UserRepository.createUser(email, password);
    if (!authUser) throw new Error("Error creating user");

    const response = await axios.post("http://localhost:8002/signup", {
      email,
      name,
      lastname,
    });
    return await response.data.response;
  }

  public static async login({ email, password, rememberme }: ILoginParams) {
    return "login service";
  }

  public static async verify() {
    return "verify service";
  }
}
