import express from "express";
import { Routes } from "./domain/routes";
import morgan from "morgan";

const app = express();
const routes = new Routes();

app.use(express.json());
app.use(morgan("dev"));

app.use("/", routes.getRouter());

export default app;
