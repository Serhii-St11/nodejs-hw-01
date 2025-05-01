import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
try{
const contacts = await readContacts();
console.log('Усі контакти:', contacts);
return contacts;
} catch (err) {
    console.error('Помилка при зчитуванні контактів:', err.message);
}
};

console.log(await getAllContacts());

