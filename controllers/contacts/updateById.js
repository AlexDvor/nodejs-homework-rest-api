const contactsOperations = require("../../model/index");

const updateById = async (req, res, next) => {
  try {
    const { error } = contactsSchema.validate(req.body);

    if (error) {
      const error = new Error("missing required name field");
      error.status = 400;
      throw error;
    }

    const { contactId } = req.params;
    const result = await contactsOperations.updateContactById(
      contactId,
      req.body
    );

    res.json({ message: "ok" });
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
