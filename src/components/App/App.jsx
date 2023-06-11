import DoForm from '../DoForm/DoForm';
import ContactList from '../ContactList/ContactList';
import Filter from 'components/FilterCOntacts/Filtercontacts';
import s from './style.module.css';
import { useSelector } from 'react-redux';

function App() {
  const { contacts } = useSelector(state => state.contacts);
  return (
    <>
      <DoForm />
      <Filter />
      <ContactList />
      <p className={s.totalContacts}>Total contacts {contacts.length}</p>
    </>
  );
}

export default App;
