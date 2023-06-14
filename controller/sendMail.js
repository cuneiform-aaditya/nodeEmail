const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (req, res) => {
    try {
        const { to, cc, subject, text } = req.body;
        const { path } = req.file;

        let transporter = await nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL, // generated ethereal user
                pass: process.env.EMAIL_PASS,
            }
        })

        let message = {
            from: '"Aaditya" <adi.dubey01@gmail.com>', // sender address
            to: to.split(','),
            subject: subject, // Subject line
            text: text, // plain text body
            attachments: [
                {
                    filename: req.file.originalname,
                    path,
                },
            ],
        }

        if (cc) {
            message.cc = cc;
        }
        transporter.sendMail(message).then((data) => {
            return res.status(201).json({
                message: "email send successfully",

            })
        }).catch((error) => console.log("Error"))

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "nahi kar paye"
        })
    }
}

module.exports = sendMail;
