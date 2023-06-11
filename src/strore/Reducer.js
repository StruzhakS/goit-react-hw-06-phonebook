import { combineReducers } from '@reduxjs/toolkit';
import contactReducer from './contacts/contactReducer';

export const reducer = combineReducers({
  contacts: contactReducer,
});
