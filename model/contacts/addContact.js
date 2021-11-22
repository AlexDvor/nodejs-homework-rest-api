const fs = require("fs/promises");
const filePath = require("../filePath");
const listContacts = require("./listContacts");

const addContact = async (body) => {
  const contacts = await listContacts();
  const randomId = Math.floor(Math.random() * (300 - 50) + 5);

  const newContacts = {
    id: randomId,
    name: body.name,
    email: body.email,
    phone: body.phone,
  };
  contacts.push(newContacts);
  await fs.writeFile(filePath, JSON.stringify(contacts));
  return listContacts();
};

module.exports = addContact;
