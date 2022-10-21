import React, { Component } from 'react';
import ContactForm from 'components/contactForm/ContactForm';
import ContactList from '../contactList/ContactList';
import Filter from '../filter/Filter';
import { Container, Title, SecondTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    if (this.state.contacts.find(item => item.name.toLowerCase() === data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts.`);
      return;
    } else if (this.state.contacts.find(item => item.number.toLowerCase() === data.number.toLowerCase())) {
      alert(`${data.number} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({ contacts: [...contacts, data] }));
  };

  changeFilter = data => {
    this.setState({ filter: data.currentTarget.value });
  };

  filterContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = data => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.name !== data.name
      ),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    if(parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <SecondTitle>Contacts</SecondTitle>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.filterContacts()}
          onClick={this.deleteContact}
        />
      </Container>
    );
  }
}
