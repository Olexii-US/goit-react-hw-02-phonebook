import PropTypes from 'prop-types';

import { ContactListElement } from '../ContactListElement/ContactListElement';

export const ContactList = ({ contactData, deleteUser }) => {
  return (
    <ul>
      {contactData.map(({ name, number, id }) => (
        <ContactListElement
          key={id}
          name={name}
          number={number}
          id={id}
          deleteUser={deleteUser}
        />
      ))}
    </ul>
  );
};

ContactListElement.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  contactData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
