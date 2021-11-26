// const contactsOperations = require("../../model/contacts/index");
const { Contact } = require("../../models");
const { NotFound } = require("http-errors");
const removeById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    // const result = await contactsOperations.removeContact(contactId);
    const result = await Contact.findByIdAndRemove(contactId);

    if (!result) {
      // const error = new Error(`not found ${contactId}`);
      // error.status = 404;
      // throw error;
      throw new NotFound(`Contact with id=${contactId} not found`);
    }
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
