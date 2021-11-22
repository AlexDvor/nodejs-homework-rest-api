const contactsOperations = require("../../model/index");

const add = async (req, res, next) => {
  try {
    const result = await contactsOperations.addContact(req.body);
    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
