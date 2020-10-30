const { body, validationResult } = require("express-validator");

const registerRules = () => [
  body("name", "Name is Required").notEmpty(),
  body("lastName", "Last Name is Required").notEmpty(),
  body("password", "password must contain at least 6 charachters").isLength({
    min: 6,
    max: 20,
  }),
  body("email", "Invalid Email").isEmail(),
  body("age", "age is Required").notEmpty(),
  body("mobile", "mobile is Required").notEmpty(),
  body("address", "address is Required").notEmpty(),
];

const loginRules = () => [
  body("email", "Invalid Email").isEmail(),
  body("password", "password must contain at least 6 charachters").isLength({
    min: 6,
    max: 20,
  }),
];

const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((el) => ({
        msg: el.msg,
      })),
    });
  }
  next();
};

module.exports = {
  validator,
  loginRules,
  registerRules,
};
