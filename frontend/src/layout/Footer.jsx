import React from "react";

function Footer() {
	return (
		<footer className="mt-10 p-6 bg-[#3e221d] text-white text-center">
			<p className="text-lg">Зв'язатися з нами:</p>
			<ul className="mt-2">
				<li>
					<a
						className="hover:underline"
						href="mailto:contact@coffeerecipes.com"
					>
						contact@coffeerecipes.com
					</a>
				</li>
				<li>
					<a className="hover:underline" href="tel:+1234567890">
						+380503333333
					</a>
				</li>
			</ul>
			<p className="mt-4">Слідкуйте за нами в соціальних мережах:</p>
			<ul className="flex justify-center gap-4 mt-2">
				<li>
					<a className="hover:underline" href="https://facebook.com">
						Facebook
					</a>
				</li>
				<li>
					<a className="hover:underline" href="https://instagram.com">
						Instagram
					</a>
				</li>
			</ul>
			<p className="mt-4">&copy; 2025 Кавові рецепти</p>
		</footer>
	);
}

export default Footer;
