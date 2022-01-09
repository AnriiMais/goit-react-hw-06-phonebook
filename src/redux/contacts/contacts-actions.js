import { createAction } from '@reduxjs/toolkit';

const add = createAction('contacts/add');
const deleteContact = createAction('contacts/delete');
const filter = createAction('contacts/filter');
export { add, deleteContact, filter };
