import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Recipe = sequelize.define("Recipe", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	img: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	ingredients: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: false,
	},
	steps: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: false,
	},
});

export default Recipe;
