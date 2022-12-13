const initialState = [];

// Actions
const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

// Reducer
export default function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case ADD_BOOK:
      return { books: [...state.books, action.payload] };
    case DELETE_BOOK:
      return { books: [...state.filter((element) => element.payload.id !== action.id)] };
    default:
      return state;
  }
}

// Action Creators
export function addBook() {
  return {
    type: ADD_BOOK,
    payload: 'book',
  };
}

export function deleteBook(index) {
  return {
    type: DELETE_BOOK,
    id: index,
  };
}
