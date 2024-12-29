import { IRegisterParams } from "./interfaces/auth.interface";

export class UserService {
  public static async register({ email, name, lastname }: IRegisterParams) {
    return { email, name, lastname };
  }
}
