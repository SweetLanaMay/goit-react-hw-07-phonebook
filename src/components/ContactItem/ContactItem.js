import React from 'react';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDeleteContact }) => {
  const handleDeleteContact = () => {
    onDeleteContact(contact.id);
  };

  return (
    <li className={css.contactsItem}>
      {contact.name}: {contact.number}
      <button className={css.deleteBtn} onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
