import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import ContactList from 'components/ContactList';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search contacts"
          className={css.filterInput}
        />
      </label>
      <ContactList contacts={filteredContacts} />
    </>
  );
};

export default Filter;
