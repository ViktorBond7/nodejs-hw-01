import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (amount) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const existingContacts = JSON.parse(data);

    for (let i = 0; i < amount; i += 1) {
      const newContacts = createFakeContact();
      existingContacts.push(newContacts);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(existingContacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(5);
