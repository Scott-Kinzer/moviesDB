import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import apiIntance from './../../service/movies.service';

export const fetchGenres = createAsyncThunk(
  'movies/fetchGenres',
  async (_, {dispatch}) => {
    const response = await apiIntance.fetchMoviesGenres();

    dispatch(setUpGenres(response));
  }
);



export const fetchGenresMovies = createAsyncThunk(
  'movies/fetchGenresMovies',
  async ({genreId, pageId}, {dispatch}) => {
    const response = await apiIntance.fetchMoviesByGenre(genreId, pageId);
    dispatch(setUpMoviesGenres(response));
  }
);

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

    } , 
    setUpGenres:(state, action)  =>{
      state.genres = action.payload;
    },

    setUpMoviesGenres:(state, action)  =>{
      state.movies = action.payload;
    }
  
    },

    
 
  })

  
  // Action creators are generated for each case reducer function
  export const { removeMovieAtCart, addMoviesToCart, setStar, setUpGenres, setUpMoviesGenres} = movieSlice.actions;
  
  export default movieSlice.reducer;