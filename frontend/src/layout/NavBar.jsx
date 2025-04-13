import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import LogoImage from "../assets/images/logo.png";

function NavBar() {
	const { user, logout } = useAuth();

	return (
		<header className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-md">
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center gap-2">
					<Link to="/" className="flex items-center gap-2">
						<img
							className="w-12 h-12"
							src={LogoImage}
							alt="Кавові рецепти"
						/>
						<h3 className="text-lg font-bold">Кавові рецепти</h3>
					</Link>
				</div>

				<input type="checkbox" id="burger-toggle" className="hidden" />
				<label
					htmlFor="burger-toggle"
					className="md:hidden text-gray-700 hover:text-gray-900 cursor-pointer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</label>
			</div>

			{/* desktop */}
			<nav className="hidden md:flex flex-col md:flex-row gap-4 mt-2 md:mt-0">
				<Link
					to="/"
					className="text-lg text-gray-700 hover:text-gray-900"
				>
					Головна
				</Link>
				<Link
					to="/recipes"
					className="text-lg text-gray-700 hover:text-gray-900"
				>
					Рецепти
				</Link>
				{!user && (
					<>
						<Link
							to="/login"
							className="text-lg text-gray-700 hover:text-gray-900"
						>
							Вхід
						</Link>
						<Link
							to="/register"
							className="text-lg text-gray-700 hover:text-gray-900"
						>
							Реєстрація
						</Link>
					</>
				)}

				{user && (
					<>
						{user.role === "admin" && (
							<Link
								to="/admin"
								className="text-lg text-gray-700 hover:text-gray-900"
							>
								Адмінка
							</Link>
						)}
						<button
							onClick={logout}
							className="bg-[#3e221d] text-white rounded hover:bg-[#603d36] transition px-4"
						>
							Вихід
						</button>
					</>
				)}
			</nav>

			{/* mobile */}
			<div
				className="absolute top-0 right-0 w-full bg-white p-4 shadow-md mt-16 hidden md:hidden z-50"
				id="mobile-menu"
			>
				<nav className="flex flex-row gap-4">
					<Link
						to="/"
						className="text-lg text-gray-700 hover:text-gray-900"
					>
						Головна
					</Link>
					<Link
						to="/recipes"
						className="text-lg text-gray-700 hover:text-gray-900"
					>
						Рецепти
					</Link>
					{!user && (
						<>
							<Link
								to="/login"
								className="text-lg text-gray-700 hover:text-gray-900"
							>
								Вхід
							</Link>
							<Link
								to="/register"
								className="text-lg text-gray-700 hover:text-gray-900"
							>
								Реєстрація
							</Link>
						</>
					)}

					{user && (
						<>
							{user.role === "admin" && (
								<Link
									to="/admin"
									className="text-lg text-gray-700 hover:text-gray-900"
								>
									Адмінка
								</Link>
							)}
							<button
								onClick={logout}
								className="bg-[#3e221d] text-white rounded hover:bg-[#603d36] transition px-4"
							>
								Вихід
							</button>
						</>
					)}
				</nav>
			</div>
		</header>
	);
}

export default NavBar;
