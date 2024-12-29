import app from "./src/app";
import { envConfig } from "./src/config";
import { connection } from "./src/database/database";

const startApp = async () => {
  try {
    await connection();
    // server start
    app.listen(envConfig.PORT, () => {
      console.log(`Server is running on http://localhost:${envConfig.PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

startApp();
