const fs = require("fs/promises");
const filePath = require("./filePath");

const listContacts = async () => {
  const contactsData = await fs.readFile(filePath);
  const parseData = JSON.parse(contactsData);
  return parseData;
};

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

const updateContactById = async (contactId, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === Number(contactId));

  if (index === -1) {
    return null;
  }

  const updatedContact = { ...contacts[index], ...body };
  contacts[index] = updatedContact;
  await updateContacts(contacts);
  return updatedContact;
};

const updateContacts = async (newContact) => {
  await fs.writeFile(filePath, JSON.stringify(newContact));
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
};
