const { Contact } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const data = await Contact.find({});
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
