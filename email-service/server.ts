import app from "./src/app";
import { envConfig } from "./src/config";

app.listen(envConfig.PORT, () => {
  console.log(`Server is running on http://localhost:${envConfig.PORT}`);
});
