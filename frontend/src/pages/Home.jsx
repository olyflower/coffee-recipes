import React from "react";
import { useFacts } from "../hooks/useFacts";
import { useRecipes } from "../hooks/useRecipes";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import RecipeCard from "../components/RecipeCard";
import FactCard from "../components/FactCard";
import Button from "../components/Button";

const apiUrl = import.meta.env.VITE_API_URL;

function Home() {
	const { facts } = useFacts();
	const { recipes } = useRecipes();

	return (
		<main className="container mx-auto p-4 my-10 lg:my-20 text-center">
			<Hero />

			<SectionTitle>Популярні рецепти</SectionTitle>

			<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
				{recipes.slice(0, 3).map((recipe) => (
					<RecipeCard
						key={recipe.id}
						title={recipe.title}
						imgSrc={`${apiUrl}/uploads/${recipe.img}`}
						alt={recipe.title}
						description={recipe.description}
					/>
				))}
			</section>

			<div className="flex justify-center mt-16">
				<Button linkTo="/recipes" text="Дивитись всі рецепти" />
			</div>

			<section className="mt-12 p-6 bg-white shadow-md rounded-lg">
				<SectionTitle>Цікаві факти про каву</SectionTitle>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
					{facts.map((fact) => (
						<FactCard key={fact.id} text={fact.text} />
					))}
				</div>
			</section>
		</main>
	);
}

export default Home;
