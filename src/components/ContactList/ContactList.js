import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import ContactItem from 'components/ContactItem';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
