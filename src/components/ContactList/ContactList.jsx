import { ContactListElement } from '../ContactListElement/ContactListElement';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, id }) => (
        <ContactListElement key={id} name={name} />
      ))}
    </ul>
  );
};
