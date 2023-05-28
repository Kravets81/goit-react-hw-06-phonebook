import React, { useState } from 'react';
import css from './ContactsForm.module.css';

import { useDispatch } from 'react-redux';
import { addContact } from 'Redux/ContactsSlice';

export default function ContactsForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    const { value } = e.target;

    setName(value);
  };

  const handleNumberChange = e => {
    const { value } = e.target;
    setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name: name, number: number }));
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={[css.form__label]}>
        Name
        <input
          className={[css.form__input]}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label className={[css.form__label]}>
        Number
        <input
          className={[css.form__input]}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNumberChange}
          value={number}
        />
      </label>
      <button className={[css.form__button]}>Add contact</button>
    </form>
  );
}
