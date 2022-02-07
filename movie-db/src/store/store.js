import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import userReducer from '../features/user/userSlice';
import moviesReducer from '../features/movies/moviesSlice';
import tvReducer from '../features/tv/tvSlice';
import personReducer from '../features/person/personSlice';


const reducer = combineReducers({
  userReducer,
  moviesReducer,
  tvReducer,
  personReducer

});

export const store = configureStore({
  reducer
});