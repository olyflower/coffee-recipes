import { Router } from "express";
import { getFacts } from "../controllers/fact.controller.js";

export const factRouter = Router();

factRouter.get("/", getFacts);

