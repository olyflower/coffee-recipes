import React from "react";
import Button from "../components/Button";

const NotFound = () => {
	return (
		<div className="bg-gray-100 flex items-center justify-center min-h-screen mt-16 pt-4">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
				<h2 className="text-2xl font-semibold text-gray-600 mb-2">
					Сторінка не знайдена
				</h2>
				<p className="text-gray-500 mb-4">
					Вибачте, ми не змогли знайти цю сторінку.
				</p>
				<p className="text-gray-500 mb-6">
					Можливо, ви ввели неправильну адресу або сторінка була
					видалена.
				</p>
				<Button linkTo="/" text="Повернутись на головну сторінку" />
			</div>
		</div>
	);
};

export default NotFound;
