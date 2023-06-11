import initialState from './initialState';
import { ADD, DELETE, DELETE_ALL, FILTER } from './types';

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, contacts: [...state.contacts, payload] };

    case DELETE:
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== payload),
      };

    case FILTER:
      return {
        ...state,
        filter: payload,
      };

    default:
      return state;
  }
};
export default contactReducer;
