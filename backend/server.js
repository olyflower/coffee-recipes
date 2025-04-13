import express from "express";
import session from "express-session";
import cors from "cors";
import sequelize from "./src/config/database.js";
import User from "./src/models/user.model.js";
import { authRouter } from "./src/routes/auth.routes.js";
import { jwtRouter } from "./src/routes/jwt.routes.js";

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,  
}));

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

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
