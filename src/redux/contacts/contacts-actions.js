import actionTypes from './contacts-types';

const add = contact => ({
  type: actionTypes.add,
  payload: contact,
});
const deleteContact = selectId => ({
  type: actionTypes.delete,
  payload: selectId,
});
const filter = text => ({
  type: actionTypes.filter,
  payload: text,
});

export { add, deleteContact, filter };
