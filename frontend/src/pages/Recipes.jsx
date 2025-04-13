import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import RecipeCard from "../components/RecipeCard";
import AddRecipeForm from "../components/AddRecipeForm";

function Recipes() {
	const { user } = useAuth();

	return (
		<section className="container mx-auto p-6 flex flex-col items-center text-center">
			<SectionTitle>Рецепти кави</SectionTitle>
			<p className="text-lg mb-6 mt-6">
				Виберіть свій улюблений рецепт кави!
			</p>

			<div className="space-y-8 w-full">
				<RecipeCard
					title="Капучино"
					imgSrc="src/assets/images/cappuccino.jpg"
					alt="Капучино"
					description="Класичний рецепт капучино з молочною пінкою."
					ingredients={[
						"Еспресо — 1 порція",
						"Молоко — 100 мл",
						"Молочна пінка",
					]}
					steps={[
						"Приготуйте еспресо.",
						"Зігрійте молоко і збийте до пінки.",
						"Додайте молоко до еспресо та зверху — пінку.",
					]}
				/>

				<RecipeCard
					title="Айс Латте"
					imgSrc="src/assets/images/latte.jpg"
					alt="Айс Латте"
					description="Освіжаючий напій з кави і молока."
					ingredients={[
						"Еспресо — 1 порція",
						"Молоко — 150 мл",
						"Лід — 100 г",
					]}
					steps={[
						"Приготуйте еспресо.",
						"Наповніть склянку льодом.",
						"Додайте еспресо і молоко.",
					]}
				/>

				<RecipeCard
					title="Кава по-східному"
					imgSrc="src/assets/images/oriental.jpg"
					alt="Кава по-східному"
					description="Ароматна кава з турки зі спеціями."
					ingredients={[
						"Мелена кава — 1 ч. л.",
						"Вода — 100 мл",
						"Цукор — за смаком",
						"Кардамон — 1/2 ч. л.",
						"Гвоздика — 1 шт.",
					]}
					steps={[
						"Змішайте воду, каву, цукор і спеції.",
						"Нагрівайте на маленькому вогні.",
						"Зніміть перед закипанням, дайте настоятись.",
					]}
				/>
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
