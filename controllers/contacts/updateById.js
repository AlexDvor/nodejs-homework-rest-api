// const contactsOperations = require("../../model/contacts/index");
const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const updateById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    // const result = await contactsOperations.updateContactById(
    //   contactId,
    //   req.body
    // );
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });

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

module.exports = updateById;
