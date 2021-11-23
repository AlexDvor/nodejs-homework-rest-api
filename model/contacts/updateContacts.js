const fs = require("fs/promises");
const filePath = require("../../helpers/filePath");

const updateContacts = async (newContact) => {
  await fs.writeFile(filePath, JSON.stringify(newContact));
};

module.exports = updateContacts;
