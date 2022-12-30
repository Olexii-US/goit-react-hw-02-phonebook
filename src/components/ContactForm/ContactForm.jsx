import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    addUser: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ),
  };

  hendleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addUser, contacts } = this.props;
    const { name } = this.state;
    addUser({ ...this.state });

    const filteredContacts = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (!filteredContacts) {
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        autoComplete="off"
        className={css.form}
      >
        <label className={css.formLabel}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.hendleChange}
            className={css.formInput}
          />
        </label>
        <label className={css.formLabel}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.hendleChange}
            className={css.formInput}
          />
        </label>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </form>
    );
  }
}
