import axios from "axios";
import { IRegisterParams, ILoginParams } from "./interfaces/auth.interface";

export class AuthService {
  public static async register({
    email,
    password,
    name,
    lastname,
  }: IRegisterParams) {
    const response = await axios.post("http://localhost:3001/signup", {
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
