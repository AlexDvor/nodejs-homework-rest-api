const contactsOperations = require("../../model/contacts/index");

const getAll = async (req, res, next) => {
  try {
    const data = await contactsOperations.listContacts();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
