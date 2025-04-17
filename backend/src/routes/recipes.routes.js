import { Router } from "express";
import { getRecipes, createRecipe } from "../controllers/recipes.controller.js";
import upload from "../middleware/uploadImage.js";

export const recipesRouter = Router();

recipesRouter.get("/", getRecipes);
recipesRouter.post("/", upload.single("recipeImage"), createRecipe);
