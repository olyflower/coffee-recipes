import React, { useEffect } from "react";
const adminUrl = import.meta.env.VITE_API_URL;

const AdminPanel = () => {
	useEffect(() => {
		window.location.href = `${adminUrl}/admin`;
	}, []);

	return <div>Redirecting to Admin Panel...</div>;
};

export default AdminPanel;
