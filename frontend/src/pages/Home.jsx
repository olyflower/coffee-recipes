import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import RecipeCard from "../components/RecipeCard";
import FactCard from "../components/FactCard";
import Button from "../components/Button";

function Home() {
	const [facts, setFacts] = useState([]);

	useEffect(() => {
		const fetchFacts = async () => {
			try {
				const response = await fetch("http://localhost:3000/facts");
				const data = await response.json();
				setFacts(data);
			} catch (error) {
				console.error("Error loading facts:", error);
			}
		};

		fetchFacts();
	}, []);

	return (
		<main className="container mx-auto p-4 my-10 lg:my-20 text-center">
			<Hero />

			<SectionTitle>Популярні рецепти</SectionTitle>

			<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
				<RecipeCard
					title="Капучино"
					imgSrc="src/assets/images/cappuccino.jpg"
					alt="Капучино"
					description="Класичний рецепт капучино"
				/>

				<RecipeCard
					title="Айс Латте"
					imgSrc="src/assets/images/latte.jpg"
					alt="Айс Латте"
					description="Освіжаючий напій з кави і молока"
				/>

				<RecipeCard
					title="Кава по-східному"
					imgSrc="src/assets/images/oriental.jpg"
					alt="Кава по-східному"
					description="Ароматна кава з турки зі спеціями"
				/>
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
