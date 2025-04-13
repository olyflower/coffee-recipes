import React from "react";

function FactCard({ text }) {
	return (
		<div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center text-center h-40 sm:h-40 md:h-60 justify-center">
			<p className="text-gray-700 text-sm sm:text-base md:text-sm lg:text-base">
				{text}
			</p>
		</div>
	);
}

export default FactCard;
