import ContactsForm from '../components/ContactsForm/ContactsForm';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.form__wrap}>
        <h1 className={css.form__title}>Phonebook</h1>
        <ContactsForm />
      </div>

      <div className={css.filter__wrap}>
        <h2 className={css.filter__subtitle}>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </div>
  );
};
