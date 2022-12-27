import React, { Component } from 'react';

export class Filter extends Component {
  state = {
    inputFind: '',
  };

  //   hendleChange = ({ target: { name, value } }) => {
  //     console.log(value);
  //     this.setState({
  //       [name]: value,
  //     });
  //     };

  hendleChange = evt => {
    this.setState({
      inputFind: evt.target.value,
    });
    const { addFilterUser } = this.props;
    // filterUser(this.state.inputFind);
    const inputNormalized = evt.target.value.trim().toLowerCase();
    addFilterUser(inputNormalized);

    // console.log(this.state.inputFind);
  };

  render() {
    const { inputFind } = this.state;
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          name="inputFind"
          value={inputFind}
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={this.hendleChange}
        />
      </label>
    );
  }
}
