import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.resolve("src/uploads/recipes");

if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, uploadDir);
	},
	filename: function (req, file, cb) {
		const uniqueName = Date.now() + "-" + file.originalname;
		cb(null, uniqueName);
	},
});
const upload = multer({ storage });

export default upload;
