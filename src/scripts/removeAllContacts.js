import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Усі контакти були успішно видалені.');
  } catch (err) {
    console.error('Помилка під час видалення контактів:', err);
  }
};

removeAllContacts();
