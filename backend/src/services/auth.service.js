import crypto from "crypto";
import User from "../models/user.model.js";

export async function getUserByEmail(email) {
	try {
		const user = await User.findOne({ where: { email } });
		if (!user) {
			throw new Error(`User not found for email: ${email}`);
		}
		return user;
	} catch (error) {
		console.error("Error fetching user:", error);
		throw error;
	}
}

// export function verifyPass(user, password) {
// 	if (!user) {
// 		throw new Error("User is undefined or null in verifyPass");
// 	}
// 	const hash = getHashByPassword(password);
// 	if (hash !== user.password) {
// 		throw new Error("Password mismatch");
// 	}
// 	return true;
// }

export function verifyPass(user, password) {
	if (!user) {
		return false;
	}

	const hash = getHashByPassword(password);
	if (hash !== user.password) {
		return false;
	}

	return true;
}

export async function postUser(user) {
	try {
		user.password = getHashByPassword(user.password);

		await User.create(user);
	} catch (error) {
		console.error("Error registering user:", error);
		throw new Error("Registration failed");
	}
}

function getHashByPassword(pass) {
	return crypto.createHash("md5").update(pass).digest("hex");
}
