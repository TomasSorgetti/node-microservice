import express from "express";
import { Routes } from "./domain/routes";

const app = express();
const routes = new Routes();

app.use(express.json());

app.use("/", routes.getRouter());

export default app;
