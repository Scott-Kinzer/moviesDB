import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import userReducer from '../features/user/userSlice';


const reducer = combineReducers({
  userReducer,

});

export const store = configureStore({
  reducer
});