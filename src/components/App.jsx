import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactListElement } from './ContactListElement/ContactListElement';
import { Filter } from './Filter/Filter';

// ////////////////////

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addUser = obj => {
    const newUser = {
      id: nanoid(),
      ...obj,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
      name: newUser.name,
    }));
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
        {/* <Filter /> */}
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
