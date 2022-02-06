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
  
      addMoviesToCart: (state, action) => {
          const checking = state.moviesCart.find(movie => movie.id === action.payload.id);
          if (!checking) {
            state.moviesCart.push(action.payload);
          }
        
    },

    removeMovieAtCart: (state, action) => {
      state.moviesCart = state.moviesCart.filter(movie => movie.id !== action.payload);
},  
    setStar:(state, action) => {
      state.moviesCart = state.moviesCart.map(movie => {
        if (movie.id === action.payload.id) {
          return {
            ...movie,
            rating: action.payload.star
          }
        }

        return movie;
      });

    } 
  
    },

    
 
  })

  
  // Action creators are generated for each case reducer function
  export const { removeMovieAtCart, addMoviesToCart, setStar} = movieSlice.actions;
  
  export default movieSlice.reducer;