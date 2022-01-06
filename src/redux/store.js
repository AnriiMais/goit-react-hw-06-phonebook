import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import data from '../data.json';
import contactsReducer from './contacts/contacts-reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});
const store = createStore(rootReducer, composeWithDevTools());
// console.log('store :>> ', store);
export default store;
