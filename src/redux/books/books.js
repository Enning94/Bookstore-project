const initialState = [
  {
    id: '1',
    title: 'The wilderlan',
    author: 'Obeng Dacosta',
  },
  {
    id: '2',
    title: 'In the chest of a woman',
    author: 'Yaw Adjei',
  },
  {
    id: '3',
    title: 'The lows and highs',
    author: 'Nelson Dagadu',
  },
];

// Actions
const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

// Reducer
const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // do reducer stuff
    case ADD_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return state.filter((element) => element.id !== action.id);
    default:
      return state;
  }
};

// Action Creators
export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const deleteBook = (index) => ({ type: DELETE_BOOK, id: index });
export default booksReducer;
