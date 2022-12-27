import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleChange = ({ target: { name, value } }) => {
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addUser } = this.props;
    addUser({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.hendleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.hendleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

// import { Formik, Form, Field } from 'formik';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   name: yup.string().required(),
// });

// const initialValues = { name: '' };

// export const ContactForm = () => {
//   const handleSubmit = (values, actions) => {
//     console.log(values);
//     // first(values);
//     // console.log(actions);
//     actions.resetForm();
//     const FormValue = values;
//   };
//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={schema}
//     >
//       <Form autoComplete="off">
//         <label htmlFor="name">
//           Name
//           <Field
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           {/* <ErrorMessage name="name" component="div" /> */}
//         </label>

//         <button type="submit">Add contact</button>
//       </Form>
//     </Formik>
//   );
// };