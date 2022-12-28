import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export class Filter extends Component {
  state = {
    inputFind: '',
  };
  static propTypes = {
    addFilterUser: PropTypes.func.isRequired,
  };

  hendleChange = evt => {
    this.setState({
      inputFind: evt.target.value,
    });
    const { addFilterUser } = this.props;
    const inputNormalized = evt.target.value.trim().toLowerCase();
    addFilterUser(inputNormalized);
  };

  render() {
    const { inputFind } = this.state;
    return (
      <label className={css.filterForm}>
        Find contacts by name
        <input
          type="text"
          name="inputFind"
          value={inputFind}
          className={css.filterInput}
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={this.hendleChange}
        />
      </label>
    );
  }
}
