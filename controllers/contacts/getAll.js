// const contactsOperations = require("../../model/contacts/index");
const { Contact } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    // const data = await contactsOperations.listContacts();
    const data = await Contact.find({});
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
