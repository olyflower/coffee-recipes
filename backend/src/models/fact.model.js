// models/fact.model.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Fact = sequelize.define("Fact", {
	text: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
});

export default Fact;
