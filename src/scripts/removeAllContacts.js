import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  const emptyContacts = [];
  fs.writeFile(PATH_DB, JSON.stringify(emptyContacts));
};

await removeAllContacts();
