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
