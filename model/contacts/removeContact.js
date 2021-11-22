const listContacts = require("./listContacts");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === Number(contactId));
  if (idx === -1) {
    return null;
  }
  const updatedData = contacts.filter((_, index) => index !== idx);
  await fs.writeFile(filePath, JSON.stringify(updatedData));
  return listContacts();
};

module.exports = removeContact;
