import { ContactListElement } from '../ContactListElement/ContactListElement';

// export const ContactList = ({ contacts, filteredUser }) => {
//   console.log('filteredUser', filteredUser);
//   return (
//     <>
//       {filteredUser.length > 0 ? (
//         <ul>
//           {filteredUser.map(({ name, number, id }) => (
//             <ContactListElement key={id} name={name} number={number} />
//           ))}
//         </ul>
//       ) : (
//         <ul>
//           {contacts.map(({ name, number, id }) => (
//             <ContactListElement key={id} name={name} number={number} />
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

export const ContactList = ({ contactData }) => {
  return (
    <ul>
      {contactData.map(({ name, number, id }) => (
        <ContactListElement key={id} name={name} number={number} />
      ))}
    </ul>
  );
};
