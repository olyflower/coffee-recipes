import { useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

export function useRecipes() {
	const [recipes, setRecipes] = useState([]);

	const fetchRecipes = async () => {
		try {
			const response = await fetch(`${apiUrl}/recipes`);
			const data = await response.json();

			const normalized = data.map((recipe) => ({
				...recipe,
				img: recipe.img.startsWith("recipes/")
					? recipe.img
					: `recipes/${recipe.img}`,
			}));

			setRecipes(normalized);
		} catch (error) {
			console.error("Error loading recipes:", error);
		}
	};

	useEffect(() => {
		fetchRecipes();
	}, []);

	return { recipes, fetchRecipes };
}
