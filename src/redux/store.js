import { configureStore } from '@reduxjs/toolkit';
import { contactsAPI } from '../services/contactsApi';
import filterReducer from './contactSlice';

const store = configureStore({
  reducer: {
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsAPI.middleware),
});

export { store };