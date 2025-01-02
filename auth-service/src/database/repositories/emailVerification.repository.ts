import { EmailVerification } from "../models";

export class EmailVerificationRepository {
  async create(userId: number, token: string, expiresAt: Date) {
    return await EmailVerification.create({ userId, token, expiresAt });
  }

  async findByUserId(userId: number) {
    return await EmailVerification.findOne({ where: { userId } });
  }

  async deleteByUserId(userId: number) {
    return await EmailVerification.destroy({ where: { userId } });
  }

  async findByToken(token: string) {
    return await EmailVerification.findOne({ where: { token } });
  }
}
