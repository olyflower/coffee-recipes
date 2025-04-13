import dotenv from "dotenv";
import {
	postUser,
	getUserByEmail,
	verifyPass,
} from "../services/auth.service.js";
import jwt from "jsonwebtoken";

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET;

export async function signUp(req, res) {
	const user = req.body;

	try {
		await postUser(user);
		res.json({ status: "OK" });
	} catch (error) {
		res.status(500).json({
			status: "Error",
			message: "Registration failed",
		});
	}
}

export async function signIn(req, res) {
	const { email, password } = req.body;

	try {
		const user = await getUserByEmail(email);

		if (!user || !verifyPass(user, password)) {
			return res.status(401).json({
				status: "Error",
				message: "Incorrect credentials",
			});
		}

		const payload = {
			email: user.email,
			role: user.role,
			permissions: ["read", "write"],
		};

		const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "15m" });
		const refreshToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });

		return res.json({ status: "OK", accessToken, refreshToken });
	} catch (error) {
		console.error(error);
		res.status(500).json({ status: "Error", message: "Server error" });
	}
}

export function newAccessToken(req, res) {
	const { email, role, permissions } = req.user;

	const accessToken = jwt.sign({ email, role, permissions }, JWT_SECRET, {
		expiresIn: "15m",
	});

	return res.json({
		status: "OK",
		message: "New access token",
		accessToken,
	});
}
