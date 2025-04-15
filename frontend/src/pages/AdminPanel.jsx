import React, { useEffect } from "react";
const adminUrl = import.meta.env.VITE_ADMIN_URL;

const AdminPanel = () => {
	useEffect(() => {
		console.log("Redirecting to:", import.meta.env.VITE_ADMIN_URL);
		window.location.href = import.meta.env.VITE_ADMIN_URL;
	}, []);

	return <div>Redirecting to Admin Panel...</div>;
};

export default AdminPanel;
