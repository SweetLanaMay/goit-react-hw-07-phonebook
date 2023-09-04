import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsOperation';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.contactWrap}>
      <p className={css.contactsItem}>
        {contact.name}: {contact.phone}
      </p>
      <button className={css.deleteBtn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
