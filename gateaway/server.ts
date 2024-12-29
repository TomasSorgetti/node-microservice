import express from "express";
import cors from "cors";
const proxy = require("express-http-proxy");

const PORT = 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", proxy("http://localhost:8001"));
app.use("/user", proxy("http://localhost:8002"));

app.listen(PORT, () => {
  console.log(`Gateaway is running on http://localhost:${PORT}`);
});
