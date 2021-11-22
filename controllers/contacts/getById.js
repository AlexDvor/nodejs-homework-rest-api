const contactsOperations = require("../../model/index");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsOperations.getContactById(contactId);

    if (!result) {
      const error = new Error(`not found ${contactId}`);
      error.status = 404;
      throw error;
    }
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;