const { Contact } = require("../../models");
const { NotFound } = require("http-errors");
const mongoose = require("mongoose");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const isValidId = mongoose.Types.ObjectId.isValid(contactId);
    if (!isValidId)
      throw new NotFound(`Contact with id: ${contactId} not found`);

    const result = await Contact.findById(contactId);
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
