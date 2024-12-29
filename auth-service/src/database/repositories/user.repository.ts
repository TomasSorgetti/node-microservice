import { User } from "../models/user.model";

export class UserRepository {
  public static async createUser(email: string, password: string) {
    return User.create({ email, password });
  }

  public static async findByEmail(email: string) {
    return User.findOne({ where: { email } });
  }

  public static async findById(id: number) {
    return User.findByPk(id);
  }
}
