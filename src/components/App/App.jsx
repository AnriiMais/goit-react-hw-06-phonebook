// import { useState, useEffect } from 'react';
import './App.scss';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

const App = () => {
  // useEffect(() => {
  //   const localCache = JSON.parse(localStorage.getItem('contacts'));
  //   setContacts(localCache || data);
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <section className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 className="contacts">Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
};

export default App;
