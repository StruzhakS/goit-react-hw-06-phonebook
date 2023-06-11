import { ADD, DELETE, FILTER } from './types';

export const addContactAction = contact => {
  return {
    type: ADD,
    payload: contact,
  };
};
export const deleteContactAction = contactId => {
  return {
    type: DELETE,
    payload: contactId,
  };
};
export const filterContactAction = filter => {
  return {
    type: FILTER,
    payload: filter,
  };
};
