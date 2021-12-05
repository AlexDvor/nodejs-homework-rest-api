const { Contact } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, favorite = "" } = req.query;
    const skip = (page - 1) * limit;

    if (favorite !== "") {
      const data = await Contact.find({ favorite }, "", {
        skip,
        limit: Number(limit),
      });
      res.json(data);
      return;
    }

    const data = await Contact.find({}, "", {
      skip,
      limit: Number(limit),
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
