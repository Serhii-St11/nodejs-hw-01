import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = [];

    for (let i = 0; i < number; i++) {
      const contact = createFakeContact();
      newContacts.push(contact);
    }

    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);

    console.log(`${number} контакт(ів) успішно згенеровано та додано.`);
  } catch (err) {
    console.error('Помилка під час генерації контактів:', err);
  }
};

generateContacts(5);
