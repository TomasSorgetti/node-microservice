import { Sequelize } from "sequelize";
import { dbConfig } from "../config";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: dbConfig.HOST,
  username: dbConfig.USERNAME,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE,
  logging: false,
});

export const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");

    await sequelize.sync({ force: false });
    console.log("Database synced successfully.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
