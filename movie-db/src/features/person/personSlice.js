import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import apiIntance from './../../service/person.service';

export const fetchPerson = createAsyncThunk(
  'person/fetchPersons',
  async (name, {dispatch}) => {
      console.log(name)
    const response = await apiIntance.fetchPersonsByName(name);
    console.log(response)
    dispatch(setUpPersons(response));
  }
);




const initialState = {
    persons: [],
   
}


export const personSlice = createSlice({
    name: 'persons/personsSlice',
    initialState,
    reducers: {
  
      setUpPersons: (state, action) => {
        state.persons = action.payload;
    },

    
  
    },

    
 
  })

  
  // Action creators are generated for each case reducer function
  export const { setUpPersons} = personSlice.actions;
  
  export default personSlice.reducer;