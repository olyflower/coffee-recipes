import Fact from "../models/fact.model.js";

export const getFacts = async (req, res) => {
	try {
		const facts = await Fact.findAll();
		res.status(200).json(facts);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error get fact" });
	}
};
