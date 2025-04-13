import React from "react";

function AddRecipeForm() {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md mt-6">
			<h2 className="text-2xl font-semibold mb-4">Додати новий рецепт</h2>
			<form className="space-y-4">
				<label className="block">
					<span className="text-lg font-medium">Назва рецепту:</span>
					<input
						type="text"
						name="recipeName"
						placeholder="Введіть назву рецепта"
						required
						className="mt-1 p-2 border border-gray-300 rounded w-full"
					/>
				</label>

				<label className="block">
					<span className="text-lg font-medium">Зображення:</span>
					<input
						type="file"
						id="recipeImage"
						name="recipeImage"
						accept="image/*"
						className="mt-1 p-2 border border-gray-300 rounded w-full"
					/>
				</label>

				<label className="block">
					<span className="text-lg font-medium">Опис:</span>
					<textarea
						name="recipeDescription"
						required
						placeholder="Додайте опис"
						className="mt-1 p-2 border border-gray-300 rounded w-full"
					></textarea>
				</label>

				<label className="block">
					<span className="text-lg font-medium">Інгредієнти:</span>
					<textarea
						name="recipeIngredients"
						required
						placeholder="Які інгредієнти?"
						className="mt-1 p-2 border border-gray-300 rounded w-full"
					></textarea>
				</label>

				<label className="block">
					<span className="text-lg font-medium">
						Кроки приготування:
					</span>
					<textarea
						name="recipeSteps"
						required
						placeholder="Опишіть кроки приготування"
						className="mt-1 p-2 border border-gray-300 rounded w-full"
					></textarea>
				</label>

				<input
					type="submit"
					value="Додати рецепт"
					className="mt-4 py-2 px-6 bg-[#3e221d] text-white rounded hover:bg-[#603d36] cursor-pointer"
				/>
			</form>
		</div>
	);
}

export default AddRecipeForm;
