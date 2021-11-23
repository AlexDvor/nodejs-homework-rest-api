const contactsOperations = require("../../model/contacts/index");

const updateById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsOperations.updateContactById(
      contactId,
      req.body
    );
    if (!result) {
      const error = new Error(`not found ${contactId}`);
      error.status = 404;
      throw error;
    }
    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
