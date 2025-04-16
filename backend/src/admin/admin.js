import AdminJS from "adminjs";
import { ComponentLoader } from "adminjs";
import AdminJSSequelize from "@adminjs/sequelize";
import AdminJSUpload from "@adminjs/upload";
import { fileURLToPath } from "url";
import sequelize from "../config/database.js";
import User from "../models/user.model.js";
import Recipe from "../models/recipe.model.js";
import Fact from "../models/fact.model.js";
import { buildAdminRouter } from "../services/adminRouter.service.js";
import path from "path";

AdminJS.registerAdapter(AdminJSSequelize);

const componentLoader = new ComponentLoader();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const adminJs = new AdminJS({
	componentLoader,
	databases: [sequelize],
	rootPath: "/admin",

	resources: [
		{
			resource: User,
			options: {
				properties: {
					password: { isVisible: false },
				},
			},
		},
		{
			resource: Recipe,
			options: {
				listProperties: ["title", "ingredients", "img"],
				editProperties: [
					"title",
					"uploadFile",
					"description",
					"ingredients",
					"steps",
				],
				properties: {
					img: {
						isVisible: {
							list: true,
							filter: false,
							show: true,
							edit: false,
						},
					},
					uploadFile: {
						isVisible: {
							list: false,
							filter: false,
							show: false,
							edit: true,
						},
					},
				},
			},
			features: [
				AdminJSUpload({
					componentLoader,
					provider: {
						local: {
							bucket: path.join(__dirname, "../uploads"),
						},
					},
					properties: {
						key: "img",
						file: "uploadFile",
					},
					uploadPath: (record, filename) =>
						`recipes/${Date.now()}-${filename}`,
				}),
			],
		},
		{
			resource: Fact,
			options: {
				listProperties: ["text"],
				editProperties: ["text"],
			},
		},
	],
});

adminJs.watch();

const adminRouter = buildAdminRouter(adminJs);

export { adminJs, adminRouter };
