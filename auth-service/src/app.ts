import express, { Application } from "express";
import { Routes } from "./domain/routes";
import morgan from "morgan";
import { ErrorHandler } from "./utils/error-handler";

const app: Application = express();

const routes = new Routes();

app.use(express.json());
app.use(morgan("dev"));

app.use("/", routes.getRouter());

app.use(ErrorHandler);

export default app;
