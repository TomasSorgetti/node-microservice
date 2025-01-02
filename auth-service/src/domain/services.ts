import axios, { AxiosError } from "axios";
import { APIError, BadRequestError } from "../utils/app-errors";
import {
  IRegisterParams,
  ILoginParams,
  IUser,
} from "./interfaces/auth.interface";
import { UserRepository } from "../database/repositories/user.repository";
import { envConfig } from "../config";
import { generateVerificationCode } from "../utils/generateVerificationCode";

export class AuthService {
  public static async register({
    email,
    password,
    name,
    lastname,
  }: IRegisterParams) {
    const existingUser: IUser | null = await UserRepository.findByEmail(email);

    if (existingUser && existingUser.deleted) {
      throw new BadRequestError("User already deleted");
    }
    if (existingUser) {
      throw new BadRequestError("User already exists");
    }
    const authUser = await UserRepository.createUser(email, password);
    if (!authUser) throw new APIError("Error creating user");

    try {
      // Create user in user service
      const url = `${envConfig.USER_API_URL}/signup`;
      await axios.post(url, {
        email,
        name,
        lastname,
      });

      // Create Verification code
      const verificationCode = generateVerificationCode();

      // TODO => almacenar temporalmente en Redis el code

      // Send email to user
      const emailServiceResponse = await axios.post(
        `${envConfig.EMAIL_API_URL}/signup`,
        {
          name,
          email,
          verificationCode,
        }
      );
      return {
        message: "User created successfully",
        user: {
          id: authUser.id,
          email,
          name,
          lastname,
        },
      };
    } catch (error: AxiosError | any) {
      console.log("error", error);
      const errorMessage =
        error.response?.data?.message || error.message || "Unknown error";
      const statusCode = error.response?.status || 500;

      throw new APIError(
        `Error in external service: ${errorMessage}`,
        statusCode
      );
    }
  }

  public static async login({ email, password, rememberme }: ILoginParams) {
    return "login service";
  }

  public static async verify() {
    return "verify service";
  }
}
