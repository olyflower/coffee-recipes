import { describe, it, expect, beforeAll, afterAll } from "vitest";
import request from "supertest";
import app from "../../server.js";
import sequelize from "../config/database.js";
import User from "../models/user.model.js";
import { getHashByPassword } from "../services/auth.service.js";

beforeAll(async () => {
	await sequelize.sync({ force: false });
	const existingUser = await User.findOne({
		where: { email: "test@example.com" },
	});

	if (!existingUser) {
		await User.create({
			username: "testuser",
			name: "Test User",
			email: "test@example.com",
			password: getHashByPassword("password123"),
		});
	}
});

afterAll(async () => {
	await sequelize.close();
});

describe("POST /auth/login", () => {
	it("should login with correct credentials", async () => {
		const response = await request(app)
			.post("/auth/login")
			.send({
				email: "test@example.com",
				password: "password123",
			})
			.expect(200);

		expect(response.body).toHaveProperty("message", "Login successful");
		expect(response.body.user).toHaveProperty("email", "test@example.com");
	});

	it("should fail with incorrect password", async () => {
		const response = await request(app)
			.post("/auth/login")
			.send({
				email: "test@example.com",
				password: "wrongpassword",
			})
			.expect(401);

		expect(response.body).toHaveProperty(
			"message",
			"Incorrect credentials"
		);
	});
});
