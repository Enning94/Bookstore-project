import book from '../../Components/Book';

const initialState = [];

// Actions
const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

// Reducer
const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // do reducer stuff
    case ADD_BOOK:
      return { books: [...state.books, action.payload] };
    case DELETE_BOOK:
      return {
        books: [...state.filter((element) => element.payload.id !== action.id)],
      };
    default:
      return state;
  }
};

// Action Creators
export const addBook = () => ({ type: ADD_BOOK, payload: book });
export const deleteBook = (index) => ({ type: DELETE_BOOK, id: index });
export default booksReducer;
