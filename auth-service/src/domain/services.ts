import axios, { AxiosError } from "axios";
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

    try {
      const url = `${process.env.GATEAWAY_URL}/user/signup`;
      const response = await axios.post(url, {
        email,
        name,
        lastname,
      });
      return response.data.response;
    } catch (error: AxiosError | any) {
      throw new Error(`Error in external service: ${error.message}`);
    }
  }

  public static async login({ email, password, rememberme }: ILoginParams) {
    return "login service";
  }

  public static async verify() {
    return "verify service";
  }
}
