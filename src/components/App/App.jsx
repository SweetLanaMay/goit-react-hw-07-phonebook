import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContactsLoading, getContactsError } from 'redux/selectors';
import { fetchContacts } from 'redux/contactsOperation';
import PhoneBook from 'components/PhoneBook';
import Filter from 'components/Filter';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getContactsLoading);
  const error = useSelector(getContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.phoneBookTitle}>PhoneBook</h1>
      <PhoneBook />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
   
    </div>
  );
};

export default App;
