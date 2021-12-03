const { Conflict } = require("http-errors");
const { User } = require("../../models");
const bcrypt = require("bcrypt");

// const register = async (req, res) => {
//   const { name, email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (user) {
//     throw new Conflict(`This ${email} in use`);
//   }

//   // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
//   //   const result = await User.create({name, email, password: hashPassword});
//   const result = await User.create({ name, email, password });
//   res.status(201).json({
//     status: "success",
//     code: 201,
//     data: {
//       result,
//     },
//   });
// };

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) throw new Conflict(`This email in use`);
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    await User.create({ name, email, password: hashPassword });

    res.status(201).json({
      status: "success",
      code: 201,
      user: {
        email,
        password,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
