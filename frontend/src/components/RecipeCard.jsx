import React from "react";

function RecipeCard({
	title,
	imgSrc,
	alt,
	description,
	ingredients = [],
	steps = [],
}) {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xl mx-auto">
			<h3 className="text-2xl font-semibold mb-2">{title}</h3>
			<img
				src={imgSrc}
				alt={alt}
				className="w-full h-64 object-cover rounded-md mb-4 mx-auto"
			/>
			{description && <p className="text-lg mb-4">{description}</p>}

			{ingredients.length > 0 && (
				<>
					<p className="font-semibold">Інгредієнти:</p>
					<ul className="list-disc list-inside mb-4">
						{ingredients.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</>
			)}

			{steps.length > 0 && (
				<>
					<p className="font-semibold">Приготування:</p>
					<ol className="list-decimal list-inside space-y-1">
						{steps.map((step, index) => (
							<li key={index}>{step}</li>
						))}
					</ol>
				</>
			)}
		</div>
	);
}

export default RecipeCard;
