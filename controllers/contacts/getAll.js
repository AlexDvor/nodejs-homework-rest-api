const { Contact } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    // const { _id } = req.user;
    const { page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;
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

// const { _id } = req.user;
// const { page = 1, limit = 10 } = req.query;
// const skip = (page - 1) * limit;
// const products = await Product.find({ owner: _id }, "", {
//   skip,
//   limit: Number(limit),
// }).populate("owner", "_id name email");
