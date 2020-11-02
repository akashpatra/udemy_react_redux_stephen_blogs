import { combineReducers } from 'redux';

export default combineReducers({
  // Tricking Redux to make the error go away for intial project setup.
  replaceMe: () => 'hi there',
});
