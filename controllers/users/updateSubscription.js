const { User } = require("../../models");
const { NotFound } = require("http-errors");
const mongoose = require("mongoose");

const updateSubscription = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { subscription } = req.body;
    console.log("req.params", req.params);
    console.log(" subscription ", subscription);
    const isValidId = mongoose.Types.ObjectId.isValid(contactId);
    if (!isValidId)
      throw new NotFound(`Contact with id: ${contactId} not found`);

    const result = await User.findByIdAndUpdate(
      contactId,
      { subscription },
      { new: true }
    );

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateSubscription;
