import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        name: 'USER1',
        username: 'USERNAME1',
        city: 'CITY1'
    }
}

export const userSlice = createSlice({
    name: 'user/userSlice',
    initialState,
    reducers: {
  
      changeInitials: (state, action) => {
          state.user = {
              ...state.user,
              ...action.payload
          }
      },
  

     
    }
 
  })

  
  // Action creators are generated for each case reducer function
  export const { changeInitials} = userSlice.actions;
  
  export default userSlice.reducer;