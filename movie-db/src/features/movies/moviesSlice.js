import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
    genres: [],
    moviesCart: []
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

      addMoviesToCart: (state, action) => {
          const checking = state.moviesCart.find(movie => movie.id === action.payload.id);
          if (!checking) {
            state.moviesCart.push(action.payload);
          }
        
    }
  
    },

    
 
  })

  
  // Action creators are generated for each case reducer function
  export const { changeInitials, addMoviesToCart} = movieSlice.actions;
  
  export default movieSlice.reducer;