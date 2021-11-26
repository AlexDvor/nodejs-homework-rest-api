const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const updateStatusContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { favorite } = req.body;
    const result = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
      { new: true }
    );

    if (!result) {
      throw new NotFound(`Contact with id=${contactId} not found`);
    }
    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusContact;
