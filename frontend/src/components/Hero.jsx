import React from "react";
import HeroImage from "../assets/images/hero.jpg";

function Hero() {
	return (
		<div className="relative w-full h-[calc(50vh-50px)] sm:h-[calc(75vh-50px)] mb-10">
			<img
				className="w-full h-full object-cover rounded-lg"
				src={HeroImage}
				alt="Кавові рецепти"
			/>
			<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 via-black/10 to-transparent flex items-center justify-center rounded-lg px-4">
				<div className="text-center text-white">
					<h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
						Завітай у світ кавових смаків!
					</h1>
					<p className="text-base sm:text-lg md:text-xl drop-shadow-xl">
						Готуй каву як справжній бариста — просто вдома, зі
						смаком і натхненням
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
