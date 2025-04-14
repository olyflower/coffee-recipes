import {
	postUser,
	getUserByEmail,
	verifyPass,
} from "../services/auth.service.js";

export async function signUp(req, res) {
	const user = req.body;

	try {
		await postUser(user);
		res.status(200).json({ message: "User registered successfully!" });
	} catch (error) {
		res.status(500).json({ message: "Error registering user" });
	}
}

export async function signIn(req, res) {
	const { email, password } = req.body;

	try {
		const user = await getUserByEmail(email);

		if (!user || !verifyPass(user, password)) {
			return res.status(401).json({ message: "Incorrect credentials" });
		}

		req.session.user = user.dataValues;

		res.status(200).json({
			message: "Login successful",
			user: user.dataValues,
		});
	} catch (error) {
		console.error("Login error:", error);
		res.status(500).json({ message: "Error login" });
	}
}

export function checkSession(req, res) {
	const { user } = req.session;

	if (!user) {
		return res.status(401).json({ message: "User is not authorized" });
	}

	return res.json(user);
}

export function logout(req, res) {
	req.session.destroy();
	res.status(200).json({ message: "Logged out successfully" });
}
