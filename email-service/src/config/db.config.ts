import dotenv from "dotenv";

dotenv.config();

export const dbConfig = {
  HOST: process.env.DB_HOST,
  USERNAME: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_NAME,
};
