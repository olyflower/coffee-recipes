import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const checkSession = async () => {
		try {
			const response = await axios.get(
				"http://localhost:3000/auth/session",
				{ withCredentials: true }
			);

			setUser(response.data);
		} catch (error) {
			setUser(null);
		}
	};

	useEffect(() => {
		checkSession();
	}, []);

	const login = async (userData) => {
		setUser(userData);
		await checkSession();
	};

	const logout = async () => {
		await axios.get("http://localhost:3000/auth/logout", {
			withCredentials: true,
		});
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
