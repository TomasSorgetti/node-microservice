export class AuthService {
  public static async register({
    email,
    password,
    name,
    lastname,
  }: {
    email: string;
    password: string;
    name: string;
    lastname: string;
  }) {
    return "register service";
  }

  public static async login({
    email,
    password,
    rememberme,
  }: {
    email: string;
    password: string;
    rememberme: boolean;
  }) {
    return "login service";
  }

  public static async verify() {
    return "verify service";
  }
}
