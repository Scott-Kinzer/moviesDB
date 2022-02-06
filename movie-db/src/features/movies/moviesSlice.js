import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
    genres: []
}

export const movieSlice = createSlice({
    name: 'movies/moviesSlice',
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