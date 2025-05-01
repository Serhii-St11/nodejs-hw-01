import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();

    contacts.push(newContact);
    await writeContacts(contacts);

    console.log('Контакт успішно додано:', newContact);
  } catch (err) {
    console.error('Помилка при додаванні контакту:', err.message);
  }
};

addOneContact();
