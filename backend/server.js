import express from "express";
import session from "express-session";
import cors from "cors";
import sequelize from "./src/config/database.js";
import User from "./src/models/user.model.js";
import { authRouter } from "./src/routes/auth.routes.js";
import { jwtRouter } from "./src/routes/jwt.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		credentials: true,
	})
);

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	})
);

app.use(express.json());
app.use("/auth", authRouter);
app.use("/jwt", jwtRouter);

sequelize
	.sync({ force: false })
	.then(() => {
		console.log("Tables have been successfully synchronized.");
	})
	.catch((error) => {
		console.error("Error synchronizing tables:", error);
	});

sequelize
	.authenticate()
	.then(() => {
		console.log(
			"Connection to the database has been established successfully."
		);
	})
	.catch((error) => {
		console.error("Unable to connect to the database:", error);
	});

if (process.env.NODE_ENV !== "test") {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
}

export default app;
