import PropTypes from 'prop-types';
import css from './ContactListElement.module.css';

export const ContactListElement = ({ name, number, id, deleteUser }) => {
  return (
    <div className={css.listBox}>
      <li className={css.listItem}>
        {name} : {number}
      </li>
      <button
        type="button"
        onClick={() => deleteUser(id)}
        className={css.button}
      >
        Delete
      </button>
    </div>
  );
};

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteUser: PropTypes.func.isRequired,
};
