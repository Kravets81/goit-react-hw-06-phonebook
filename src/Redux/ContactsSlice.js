import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],

  reducers: {
    addContact: {
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(6),
          },
        };
      },
      reducer(state, action) {
        const { name, number, id } = action.payload;
        const existingContact = state.find(state => state.name === name);
        if (existingContact) {
          return alert('Contact with the same name already exists');
        }
        state.push({ id, name, number });
      },
    },

    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
