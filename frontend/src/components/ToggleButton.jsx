import React from "react";

function ToggleButton({ toggleMenu }) {
	
	return (
		<button
			className="md:hidden text-gray-700 hover:text-gray-900"
			onClick={toggleMenu}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				className="w-6 h-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>
	);
}

export default ToggleButton;
