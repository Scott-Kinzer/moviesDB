import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import userReducer from '../features/user/userSlice';
import moviesReducer from '../features/movies/moviesSlice';


const reducer = combineReducers({
  userReducer,
  moviesReducer

});

export const store = configureStore({
  reducer
});