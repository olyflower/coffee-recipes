import { getUserByEmail, verifyPass } from "./auth.service.js";
import AdminJSExpress from "@adminjs/express";


export function buildAdminRouter(adminJs) {
	return AdminJSExpress.buildAuthenticatedRouter(
		adminJs,
		{
			authenticate: async (email, password) => {
				const user = await getUserByEmail(email);
				if (
					user &&
					verifyPass(user, password) &&
					user.role === "admin"
				) {
					return user;
				}
				return null;
			},
		},
		null,
		{
			resave: false,
			saveUninitialized: true,
		}
	);
}
