const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const findContacts = contacts.find(
    (contacts) => contacts.id === Number(contactId)
  );

  if (!findContacts) {
    return null;
  }
  return findContacts;
};

module.exports = getContactById;
