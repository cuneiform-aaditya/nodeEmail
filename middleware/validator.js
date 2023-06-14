const Validator = require("validatorjs");

exports.validateEmail = async (req, res, next) => {

    const rules = {
        to: "required|email",
        cc: "email",
        text: "required|string",
        subject: "required|string"
    }

    const validation = new Validator(req.body, rules);
    if (validation.fails()) {
        return res.status(400).json({
            errors: validation.errors.all()
        })
    }
    next();
} 