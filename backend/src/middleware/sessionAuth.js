export const sessionMiddleware = (req, res, next) => {
	const { user } = req.session;

	if (!user) {
		return res.redirect("/auth/login");
	}

	next();
};
