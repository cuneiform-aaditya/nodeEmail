const express = require("express");
const router = express.Router();
const multer = require('multer');
const sendMail = require("../controller/sendMail");
const upload = multer({ dest: 'uploads/' })
const { validateEmail } = require("../middleware/validator");

router.post("/sendEmail", upload.single('html-file'), validateEmail, sendMail);

module.exports = router;