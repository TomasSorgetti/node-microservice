import { createClient } from "redis";

// Crear un cliente Redis
const redisClient = createClient({
  url: "redis://localhost:6379",
});

redisClient.on("error", (err) => {
  console.error("Error en Redis:", err);
});

export const RedisConnection = async () => {
  try {
    await redisClient.connect();
    console.log("Conectado a Redis");
  } catch (error) {
    console.error("No se pudo conectar a Redis:", error);
  }
};

export default redisClient;
