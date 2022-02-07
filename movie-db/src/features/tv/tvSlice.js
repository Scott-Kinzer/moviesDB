import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import apiIntance from './../../service/tv.service.js';



export const fetchTV= createAsyncThunk(
  'tv/fetchTV',
  async ({currentYear, currentSort, currentPage}, {dispatch}) => {
    const response = await apiIntance.fetchTVByYearAndSort(currentYear, currentSort, currentPage);
    dispatch(setUpTV(response));
  }
);


export const fetchDetailsTV= createAsyncThunk(
    'tv/fetchTV',
    async ({tvId}, {dispatch}) => {
      const response = await apiIntance.fetchTvById(tvId);
      dispatch(setUpDetailsTv(response));
    }
  );
  

const initialState = {
    tv: {},
    tvDetails: null
}




export const movieSlice = createSlice({
    name: 'movies/tvSlice',
    initialState,
    reducers: {
  
      setUpTV: (state, action) => {
          state.tv = action.payload;
        
    },

    setUpDetailsTv: (state, action) => {
        state.tvDetails = action.payload;
    }

    },

 
  })

  
  // Action creators are generated for each case reducer function
  export const { setUpTV, setUpDetailsTv} = movieSlice.actions;
  
  export default movieSlice.reducer;