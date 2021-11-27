const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const result = await Contact.findById(contactId);

    if (!result) {
      throw new NotFound(`Contact with id=${contactId} not found`);
    }
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
