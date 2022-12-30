import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

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

  addUser = obj => {
    const newUser = {
      id: nanoid(),
      ...obj,
    };

    const filteredAlertContacts = this.state.contacts.find(
      item => item.name.toLowerCase() === newUser.name.toLowerCase()
    );

    filteredAlertContacts
      ? alert(`${filteredAlertContacts.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newUser],
        }));
  };

  addFilterUser = inputFind => {
    this.setState({ filter: inputFind });
  };

  filteredUser = () => {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(filter)
    );
    return filteredContacts;
  };

  deleteUser = userId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(user => user.id !== userId),
    }));
  };

  render() {
    return (
      <div style={{ padding: '40px' }}>
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} contacts={this.state.contacts} />

        <h2 style={{ fontSize: '32px' }}>Contacts</h2>
        <Filter addFilterUser={this.addFilterUser} />

        {this.state.filter ? (
          <ContactList
            contactData={this.filteredUser()}
            deleteUser={this.deleteUser}
          />
        ) : (
          <ContactList
            contactData={this.state.contacts}
            deleteUser={this.deleteUser}
          />
        )}
      </div>
    );
  }
}
