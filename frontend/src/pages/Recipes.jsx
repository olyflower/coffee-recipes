import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import RecipeCard from "../components/RecipeCard";
import AddRecipeForm from "../components/AddRecipeForm";

function Recipes() {
	const { user } = useAuth();

	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				const response = await fetch("http://localhost:3000/recipes");
				const data = await response.json();
				console.log("Fetched recipes:", data); 
				setRecipes(data);
			} catch (error) {
				console.error("Error loading facts:", error);
			}
		};

		fetchRecipes();
	}, []);

	return (
		<section className="container mx-auto p-6 flex flex-col items-center text-center">
			<SectionTitle>Рецепти кави</SectionTitle>
			<p className="text-lg mb-6 mt-6">
				Виберіть свій улюблений рецепт кави!
			</p>

			<div className="space-y-8 w-full">
				{recipes.map((recipe, index) => (
					<RecipeCard
						key={index}
						title={recipe.title}
						imgSrc={`http://localhost:3000/uploads/${recipe.img}`}
						alt={recipe.title}
						description={recipe.description}
						ingredients={recipe.ingredients}
						steps={recipe.steps}
					/>
				))}
			</div>

			{user ? (
				<AddRecipeForm />
			) : (
				<div className="bg-white p-4 mt-6">
					<p className="text-base lg:text-2xl">
						Щоб додавати рецепти,
						<Link to="/login" className="font-bold hover:underline">
							увійдіть в систему
						</Link>{" "}
						або{" "}
						<Link
							to="/register"
							className="font-bold hover:underline"
						>
							зареєструйтесь
						</Link>
						.
					</p>
				</div>
			)}
		</section>
	);
}

export default Recipes;
