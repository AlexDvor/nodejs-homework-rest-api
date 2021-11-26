// const contactsOperations = require("../../model/contacts/index");
const { Contact } = require("../../models");

const add = async (req, res, next) => {
  try {
    // const result = await contactsOperations.addContact(req.body);
    const result = await Contact.create(req.body);
    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
