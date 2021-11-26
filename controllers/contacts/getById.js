// const contactsOperations = require("../../model/contacts/index");
const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    // const result = await contactsOperations.getContactById(contactId);
    const result = await Contact.findById(contactId);

    if (!result) {
      // const error = new Error(`not found ${contactId}`);
      // error.status = 404;
      // throw error;
      throw new NotFound(`Contact with id=${contactId} not found`);
    }
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
