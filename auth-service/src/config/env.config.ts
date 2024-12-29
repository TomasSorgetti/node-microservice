import dotenv from "dotenv";

dotenv.config();

export const envConfig = {
  PORT: process.env.PORT || 3000,
};
