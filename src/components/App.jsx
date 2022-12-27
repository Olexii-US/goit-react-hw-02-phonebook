import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// ////////////////////

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  addUser = obj => {
    const newUser = {
      id: nanoid(),
      ...obj,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
      name: newUser.name,
      number: newUser.number,
    }));
  };

  addFilterUser = inputFind => {
    this.setState({ filter: inputFind });
    // console.log('inputFind', inputFind);
  };

  filteredUser = () => {
    const { contacts, filter } = this.state;
    // this.setState({ filter: inputFind });

    console.log('contacts', contacts);
    console.log('filter', filter);

    const filteredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(filter)
    );

    console.log('filteredContacts', filteredContacts);
    return filteredContacts;
  };

  deleteUser = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== userId),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} />

        <h2>Contacts</h2>
        <Filter addFilterUser={this.addFilterUser} />
        {/* 
        {this.state.filter ? (
          <ContactList contacts={[]} filteredUser={this.filteredUser()} />
        ) : (
          <ContactList
            contacts={this.state.contacts}
            filteredUser={this.filteredUser()}
          />
        )} */}

        {this.state.filter ? (
          <ContactList contactData={this.filteredUser()} />
        ) : (
          <ContactList contactData={this.state.contacts} />
        )}
      </div>
    );
  }
}
