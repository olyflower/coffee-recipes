import React from "react";

function SectionTitle({ children }) {
	return (
		<h2 className="text-2xl md:text-4xl font-semibold text-center mt-4">
			{children}
		</h2>
	);
}

export default SectionTitle;
