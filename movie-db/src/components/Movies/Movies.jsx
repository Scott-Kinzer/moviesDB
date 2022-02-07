import React, { useEffect, useState } from 'react';

import { Select } from 'antd';
import { fetchGenres, fetchGenresMovies } from '../../features/movies/moviesSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

import { Pagination } from 'antd';

const { Option } = Select;



export default function Movies() {

  const { genres, movies } = useSelector(state => {
    return state.moviesReducer
  });
  const [genreId, setGenreId] = useState(28);
  const [pageId, setPageId] = useState(1);


  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchGenres());
  }, [])


  useEffect(() => {
    if (genreId) {
      dispatch(fetchGenresMovies({ genreId, pageId }));
    }
  }, [genreId, pageId]);


  const handleChange = value => {
    setGenreId({ value });
    setPageId(1);

  }

  const onChange = page => {
    setPageId(page);
  };




  return (<div>

    <div style={{display: 'flex', jusifyContent: 'space-around', margin: '7px'}}>
    {genreId && !!genres.length &&
      <Select defaultValue={genres[0].name} style={{ width: 120 }} onChange={handleChange}>

        {!!genres.length && genres.map(genre => <Option key={genre.id} value={genre.id}>{genre.name}</Option>)}
      </Select>

    }

    <Pagination defaultCurrent={pageId} total={100} onChange={onChange} />

    </div>

    <div style={{ display: 'flex', flexWrap: 'wrap' }}>

      {movies.map(movie => <MovieItem movie={movie} />)}

    </div>




  </div>);
}
