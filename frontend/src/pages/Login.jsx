import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"http://localhost:3000/auth/login",
				{
					email,
					password,
				},
				{
					withCredentials: true,
				}
			);

			setMessage("Вхід успішний!");
			setIsSuccess(true);
			login(response.data.user);
			setTimeout(() => {
				navigate("/");
			}, 1000);
		} catch (error) {
			setMessage("Невірна електрона пошта або пароль. Спробуйте ще раз.");
			setIsSuccess(false);
		}
	};

	return (
		<div className="bg-gray-100 flex items-center justify-center min-h-screen mt-16">
			<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
				<h1 className="text-2xl font-bold text-center mb-4">Вхід</h1>
				<form
					id="loginForm"
					className="space-y-4"
					onSubmit={handleSubmit}
				>
					<div>
						<label
							htmlFor="email"
							className="block text-gray-700 font-medium"
						>
							Електронна пошта
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							autoComplete="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-gray-700 font-medium"
						>
							Пароль
						</label>
						<input
							type="password"
							id="password"
							name="password"
							required
							autoComplete="current-password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-[#3e221d] text-white p-2 rounded hover:bg-[#603d36] transition"
					>
						Увійти
					</button>
				</form>
				{message && (
					<div
						className={`mt-4 p-2 text-center ${
							isSuccess ? "text-green-600" : "text-red-600"
						}`}
					>
						{message}
					</div>
				)}
			</div>
		</div>
	);
}

export default Login;
