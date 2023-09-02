import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsOperation';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => dispatch(deleteContacts(contact.id));

  return (
    <p className={css.contactsItem}>
      {contact.name}: {contact.phone}
      <button className={css.deleteBtn} onClick={handleDeleteContact}>
        Delete
      </button>
    </p>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
