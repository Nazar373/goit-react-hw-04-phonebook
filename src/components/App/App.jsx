import React, { useState, useEffect } from 'react';
import ContactForm from 'components/contactForm/ContactForm';
import ContactList from '../contactList/ContactList';
import Filter from '../filter/Filter';
import { nanoid } from 'nanoid';
import { Container, Title, SecondTitle } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) || [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    } else if (contacts.find(item => item.number === number)) {
      alert(`${number} is already in contacts.`);
      return;
    }
    setContacts(contacts => [{ id: nanoid(), name, number }, ...contacts]);
  };

  const changeFilter = data => {
    setFilter({ filter: data.currentTarget.value });
  };

  const filterContacts = () => {
    return contacts.filter(item => item.name.includes(filter));
  };

  const deleteContact = data => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.name !== data.name);
    });
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <SecondTitle>Contacts</SecondTitle>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={filterContacts()} onClick={deleteContact} />
    </Container>
  );
}
