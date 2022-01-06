import { combineReducers } from 'redux';
import actionTypes from './contacts-types';
import data from '../../data.json';

const itemsReducer = (state = [...data], { type, payload }) => {
  switch (type) {
    case actionTypes.add:
      const { name, number } = payload;
      if (
        state.every(
          contact =>
            contact.name.toLowerCase() !== name.toLowerCase() &&
            number !== contact.number,
        )
      ) {
        return [...state, payload];
      } else alert(`${name} contact with the ${number} already exists!!!`);
      return state;
    case actionTypes.delete:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};
const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.filter:
      return payload;

    default:
      return state;
  }
};
const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
export default contactsReducer;
