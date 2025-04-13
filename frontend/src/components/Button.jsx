import React from "react";
import { Link } from "react-router-dom";

function Button({ linkTo, text }) {
	return (
		<Link
			to={linkTo}
			className="p-4 bg-[#3e221d] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#603d36] transition"
		>
			{text}
		</Link>
	);
}

export default Button;
