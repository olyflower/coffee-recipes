import express from "express";
import session from "express-session";
import cors from "cors";
import sequelize from "./src/config/database.js";
import User from "./src/models/user.model.js";
import Recipe from "./src/models/recipe.model.js";
import Fact from "./src/models/fact.model.js";
import { authRouter } from "./src/routes/auth.routes.js";
import { jwtRouter } from "./src/routes/jwt.routes.js";
import { factRouter } from "./src/routes/fact.routes.js";
import { recipesRouter } from "./src/routes/recipes.routes.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const uploadsPath = path.join(__dirname, "src", "uploads");

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
app.use("/facts", factRouter);
app.use("/recipes", recipesRouter);
app.use("/uploads", express.static(uploadsPath));
app.use("/images", express.static("public/images"));

if (process.env.NODE_ENV !== "test") {
	import("./src/admin/admin.js").then(({ adminJs, adminRouter }) => {
		app.use(adminJs.options.rootPath, adminRouter);
	});
}

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
