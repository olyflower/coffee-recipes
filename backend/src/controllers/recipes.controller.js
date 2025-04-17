import Recipe from "../models/recipe.model.js";

export const getRecipes = async (req, res) => {
	try {
		const recipes = await Recipe.findAll();
		res.status(200).json(recipes);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error get recipes" });
	}
};

export const createRecipe = async (req, res) => {
	try {
		const {
			recipeName,
			recipeDescription,
			recipeIngredients,
			recipeSteps,
		} = req.body;

		const newRecipe = await Recipe.create({
			title: recipeName,
			description: recipeDescription,
			ingredients: recipeIngredients,
			steps: recipeSteps,
			img: req.file.filename,
		});

		res.status(201).json(newRecipe);
	} catch (error) {
		console.error("Error creating recipe:", error);
		res.status(500).json({ message: "Server error" });
	}
};
