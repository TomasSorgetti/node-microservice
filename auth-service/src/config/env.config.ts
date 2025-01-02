import dotenv from "dotenv";

dotenv.config();

export const envConfig = {
  PORT: process.env.PORT || 3000,
  USER_API_URL: process.env.USER_API_URL,
  EMAIL_API_URL: process.env.EMAIL_API_URL,
};
