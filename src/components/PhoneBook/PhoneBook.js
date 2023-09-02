import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsOperation';
import { getContacts } from 'redux/selectors';
import css from './PhoneBook.module.css';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setPhone(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(
        `Contact with the name ${name} already exists! Please enter a different name.`
      );
    } else {
      const newContact = {
        name,
        phone,
      };

      dispatch(addContacts(newContact));
      setName('');
      setPhone('');
    }
  };
  // console.log(contacts)
  return (
    <form className={css.phoneBookForm} onSubmit={handleFormSubmit}>
      <label className={css.formName}>
        Name
        <input
          value={name}
          onChange={handleNameChange}
          className={css.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.formName}>
        Phone
        <input
          value={phone}
          onChange={handleNumberChange}
          className={css.formInput}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.formButton}>
        Add contact
      </button>
    </form>
  );
};

export default PhoneBook;
