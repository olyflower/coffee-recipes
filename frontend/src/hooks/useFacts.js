import { useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

export function useFacts() {
	const [facts, setFacts] = useState([]);

	useEffect(() => {
		const fetchFacts = async () => {
			try {
				const response = await fetch(`${apiUrl}/facts`);
				const data = await response.json();
				setFacts(data);
			} catch (error) {
				console.error("Error loading facts:", error);
			}
		};

		fetchFacts();
	}, []);

	return { facts };
}
