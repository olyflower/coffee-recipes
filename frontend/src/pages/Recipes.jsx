import React from "react";
import { useRecipes } from "../hooks/useRecipes";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import RecipeCard from "../components/RecipeCard";
import AddRecipeForm from "../components/AddRecipeForm";

const apiUrl = import.meta.env.VITE_API_URL;

function Recipes() {
	const { user } = useAuth();
	const { recipes, fetchRecipes } = useRecipes();

	return (
		<section className="container mx-auto p-6 flex flex-col items-center text-center">
			<SectionTitle>Рецепти кави</SectionTitle>
			<p className="text-lg mb-6 mt-6">
				Виберіть свій улюблений рецепт кави!
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 w-full">
				{recipes.map((recipe, index) => {
					const imageUrl = `${apiUrl}/uploads/${recipe.img}`;

					return (
						<RecipeCard
							key={index}
							title={recipe.title}
							imgSrc={imageUrl}
							alt={recipe.title}
							description={recipe.description}
							ingredients={recipe.ingredients}
							steps={recipe.steps}
						/>
					);
				})}
			</div>

			{user ? (
				<AddRecipeForm onRecipeAdded={fetchRecipes} />
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
