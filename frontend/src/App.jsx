import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import AdminPanel from "./pages/AdminPanel";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="recipes" element={<Recipes />} />
					</Route>

					<Route path="admin/*" element={<AdminPanel />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;
