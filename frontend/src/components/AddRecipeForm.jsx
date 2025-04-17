import React, { useState, useEffect } from "react";
import axios from "axios";
import previewImage from "../assets/images/preview_default.jpg";

const apiUrl = import.meta.env.VITE_API_URL;

function AddRecipeForm({ onRecipeAdded }) {
	const [recipeName, setRecipeName] = useState("");
	const [recipeDescription, setRecipeDescription] = useState("");
	const [ingredients, setIngredients] = useState([""]);
	const [steps, setSteps] = useState([""]);
	const [imageFile, setImageFile] = useState(null);
	const [message, setMessage] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);

	useEffect(() => {
		if (message) {
			const timeout = setTimeout(() => {
				setMessage("");
			}, 1000);

			return () => clearTimeout(timeout);
		}
	}, [message]);

	const handleAddIngredient = () => {
		setIngredients([...ingredients, ""]);
	};

	const handleRemoveIngredient = (index) => {
		setIngredients(ingredients.filter((_, i) => i !== index));
	};

	const handleIngredientChange = (index, value) => {
		const updated = [...ingredients];
		updated[index] = value;
		setIngredients(updated);
	};

	const handleAddStep = () => {
		setSteps([...steps, ""]);
	};

	const handleRemoveStep = (index) => {
		setSteps(steps.filter((_, i) => i !== index));
	};

	const handleStepChange = (index, value) => {
		const updated = [...steps];
		updated[index] = value;
		setSteps(updated);
	};

	const imageDefaultPreview =
		imageFile instanceof File
			? URL.createObjectURL(imageFile)
			: previewImage;

	const handleFileChange = (e) => {
		if (e.target.files[0]) {
			setImageFile(e.target.files[0]);
		} else {
			setImageFile(null);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("recipeName", recipeName);
		formData.append("recipeDescription", recipeDescription);

		if (imageFile) {
			formData.append("recipeImage", imageFile);
		} else {
			const response = await fetch(previewImage);
			const blob = await response.blob();
			const defaultImageFile = new File([blob], "default_image.jpg", {
				type: blob.type,
			});
			formData.append("recipeImage", defaultImageFile);
		}

		ingredients.forEach((item, index) => {
			formData.append(`recipeIngredients[${index}]`, item);
		});
		steps.forEach((item, index) => {
			formData.append(`recipeSteps[${index}]`, item);
		});

		try {
			await axios.post(`${apiUrl}/recipes`, formData, {
				withCredentials: true,
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			setMessage("Рецепт додано успішно!");
			setIsSuccess(true);

			if (onRecipeAdded) {
				onRecipeAdded();
			}

			setRecipeName("");
			setRecipeDescription("");
			setIngredients([""]);
			setSteps([""]);
			setImageFile(null);
		} catch (error) {
			console.error(error);
			setMessage("Помилка при додаванні рецепту.");
			setIsSuccess(false);
		}
	};

	return (
		<div className="bg-white p-6 rounded-lg shadow-md mt-6 max-w-4xl mx-auto">
			<h2 className="text-2xl font-semibold mb-4">Додати новий рецепт</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<label className="block">
					<span className="text-lg font-medium">Назва рецепту:</span>
					<input
						type="text"
						value={recipeName}
						onChange={(e) => setRecipeName(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded w-full"
					/>
				</label>

				<label className="block">
					<span className="text-lg font-medium">Зображення:</span>
					<input
						type="file"
						accept="image/*"
						onChange={handleFileChange}
						className="mt-1 p-2 border border-gray-300 rounded w-full"
					/>
				</label>
				<div className="mt-4">
					<img
						src={imageDefaultPreview}
						alt="imageDefaultPreview"
						className="w-full h-60 object-cover rounded-md"
					/>
				</div>

				<label className="block">
					<span className="text-lg font-medium">Опис:</span>
					<textarea
						value={recipeDescription}
						onChange={(e) => setRecipeDescription(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded w-full"
					></textarea>
				</label>

				<div>
					<span className="text-lg font-medium">Інгредієнти:</span>
					{ingredients.map((ingredient, index) => (
						<div
							key={index}
							className="flex items-center gap-2 mt-2"
						>
							<input
								type="text"
								value={ingredient}
								onChange={(e) =>
									handleIngredientChange(
										index,
										e.target.value
									)
								}
								required
								className="p-2 border border-gray-300 rounded w-full"
							/>
							{ingredients.length > 1 && (
								<button
									type="button"
									onClick={() =>
										handleRemoveIngredient(index)
									}
									className="text-red-500"
								>
									✕
								</button>
							)}
						</div>
					))}
					<button
						type="button"
						onClick={handleAddIngredient}
						className="mt-2 text-sm text-blue-600"
					>
						+ Додати інгредієнт
					</button>
				</div>

				<div>
					<span className="text-lg font-medium">
						Кроки приготування:
					</span>
					{steps.map((step, index) => (
						<div
							key={index}
							className="flex items-center gap-2 mt-2"
						>
							<input
								type="text"
								value={step}
								onChange={(e) =>
									handleStepChange(index, e.target.value)
								}
								required
								className="p-2 border border-gray-300 rounded w-full"
							/>
							{steps.length > 1 && (
								<button
									type="button"
									onClick={() => handleRemoveStep(index)}
									className="text-red-600"
								>
									✕
								</button>
							)}
						</div>
					))}
					<button
						type="button"
						onClick={handleAddStep}
						className="mt-2 text-sm text-blue-600"
					>
						+ Додати крок
					</button>
				</div>

				<input
					type="submit"
					value="Додати рецепт"
					className="mt-4 py-2 px-6 bg-[#3e221d] text-white rounded hover:bg-[#603d36] cursor-pointer"
				/>
			</form>
			{message && (
				<div
					className={`mt-4 p-2 text-center rounded ${
						isSuccess
							? "text-green-600 bg-green-100"
							: "text-red-600 bg-red-100"
					}`}
				>
					{message}
				</div>
			)}
		</div>
	);
}

export default AddRecipeForm;
