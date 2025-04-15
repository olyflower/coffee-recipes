import { Router } from "express";
import { getRecipes } from "../controllers/recipes.controller.js";

export const recipesRouter = Router();

recipesRouter.get("/", getRecipes);
