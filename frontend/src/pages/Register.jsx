import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("Паролі не співпадають!");
			return;
		}

		try {
			const response = await axios.post(
				`${apiUrl}/auth/register`,
				{
					username,
					email,
					password,
				},
				{
					withCredentials: true,
				}
			);

			setMessage("Реєстрація успішна!.");
			setIsSuccess(true);
			setTimeout(() => {
				navigate("/login");
			}, 1000);
		} catch (error) {
			setMessage(
				"Не вдалося зареєструвати користувача. Спробуйте ще раз."
			);
			setIsSuccess(false);
		}
	};

	return (
		<>
			<NavBar />
			<div className="bg-gray-100 flex items-center justify-center min-h-screen">
				<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
					<h1 className="text-2xl font-bold text-center mb-4">
						Реєстрація
					</h1>
					<form
						id="registerForm"
						className="space-y-4"
						onSubmit={handleSubmit}
					>
						<div>
							<label
								htmlFor="username"
								className="block text-gray-700 font-medium"
							>
								Ім'я користувача
							</label>
							<input
								type="text"
								id="username"
								name="username"
								required
								autoComplete="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
							/>
						</div>
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
								autoComplete="new-password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
							/>
						</div>
						<div>
							<label
								htmlFor="confirmPassword"
								className="block text-gray-700 font-medium"
							>
								Підтвердження паролю
							</label>
							<input
								type="password"
								id="confirmPassword"
								name="confirmPassword"
								required
								autoComplete="new-password"
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
								className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-[#3e221d] text-white p-2 rounded hover:bg-[#603d36] transition"
						>
							Зареєструватися
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
			<Footer />
		</>
	);
}

export default Register;
