import redisClient from "../redis";

export class EmailVerificationRepository {
  public static async saveVerificationCode(userId: number, code: string) {
    const expiresIn = 600; // El código expira en 10 minutos (600 segundos)
    try {
      await redisClient.setEx(`email_verification:${userId}`, expiresIn, code);
      console.log(
        `Código de verificación para el usuario ${userId} guardado correctamente`
      );
    } catch (error) {
      console.error(
        `Error al guardar el código para el usuario ${userId}:`,
        error
      );
    }
  }

  public static async getVerificationCode(userId: number) {
    try {
      const code = await redisClient.get(`email_verification:${userId}`);
      return code;
    } catch (error) {
      console.error(
        `Error al obtener el código para el usuario ${userId}:`,
        error
      );
      return null;
    }
  }

  public static async deleteVerificationCode(userId: number) {
    try {
      await redisClient.del(`email_verification:${userId}`);
      console.log(`Código de verificación para el usuario ${userId} eliminado`);
    } catch (error) {
      console.error(
        `Error al eliminar el código para el usuario ${userId}:`,
        error
      );
    }
  }
}
