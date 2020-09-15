const redux = require('redux');

const { createStore } = redux;

const initialState = {
  value: 0,
  age: 17,
};

// Reducer
const rootReducer = (state = initialState) => state;

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action

// Subcription
