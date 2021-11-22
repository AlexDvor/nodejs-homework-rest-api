const fs = require("fs/promises");
const filePath = require("../filePath");

const listContacts = async () => {
  const contactsData = await fs.readFile(filePath);
  const parseData = JSON.parse(contactsData);
  return parseData;
};

module.exports = listContacts;
