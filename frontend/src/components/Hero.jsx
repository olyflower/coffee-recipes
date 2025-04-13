import React from "react";
import HeroImage from "../assets/images/hero.jpg";

function Hero() {
	return (
		<div className="relative w-full h-[calc(50vh-50px)] sm:h-[calc(75vh-50px)] mb-10">
			<img
				className="w-full h-full object-cover rounded-lg shadow-md"
				src={HeroImage}
				alt="Кавові рецепти"
			/>
			<div className="absolute top-0 left-0 w-full h-full bg-[#ffffff4d] bg-opacity-30 p-12 rounded-3xl flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-8">
						Ласкаво просимо на сайт кавових рецептів!
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-gray-900">
						Знаходьте смачні рецепти кави та кавових напоїв, готуйте
						вдома як професійний бариста
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
