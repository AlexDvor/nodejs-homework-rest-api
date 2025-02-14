const { Conflict } = require("http-errors");
const { User } = require("../../models");
const { nanoid } = require("nanoid");
const gravatar = require("gravatar");
const bcrypt = require("bcrypt");
const sendEmail = require("../../helpers/sendEmail");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) throw new Conflict(`This email in use`);
    const verifyToken = nanoid();
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const avatarURL = gravatar.url(email);
    const result = await User.create({
      name,
      email,
      password: hashPassword,
      avatarURL,
      verifyToken,
    });
    const mail = {
      to: email,
      subject: "Подтверждения email",
      html: `<a  href="http://localhost:4040/api/users/verify/${verifyToken}" target="_blank">Подтвердить email</a>`,
    };
    await sendEmail(mail);

    res.status(201).json({
      status: "success",
      code: 201,
      user: {
        email: result.email,
        subscription: result.subscription,
        verifyToken: result.verifyToken,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
