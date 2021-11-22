const fs = require("fs/promises");
const filePath = require("../filePath");
const listContacts = require("./listContacts");

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const randomId = Math.floor(Math.random() * (300 - 50) + 5);

  const newContacts = {
    id: randomId,
    name,
    email,
    phone,
  };
  contacts.push(newContacts);
  await fs.writeFile(filePath, JSON.stringify(contacts));
  return listContacts();
};

module.exports = addContact;
