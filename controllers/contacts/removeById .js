const { Contact } = require("../../models");
const { NotFound } = require("http-errors");
const mongoose = require("mongoose");

const removeById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const isValidId = mongoose.Types.ObjectId.isValid(contactId);
    if (!isValidId)
      throw new NotFound(`Contact with id: ${contactId} not found`);

    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
