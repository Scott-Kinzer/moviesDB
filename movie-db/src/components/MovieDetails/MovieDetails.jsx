import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiIntance from '../../service/movies.service';


import s from './movie.details.module.css';

export default function MovieDetails() {

  const {movieId} = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    apiIntance.fetchMovieById(movieId).then(setMovieDetails);
  }, []);

  return (<div className={s.detailsWrapper}>

    {movieDetails && 
    <>
      <div className={s.movieWrapper}>
      {movieDetails.backdrop_path ? <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`} alt="" /> : <div>NP PHOTO</div>}
          <div className={s.movieDescrWrapper}>
              <div>ORIGINAL TITLE: {movieDetails.original_title}</div>
              <div>RELEASE DATE: {movieDetails.release_date}</div>
              <div>RATING: {movieDetails.vote_average}</div>
          </div>
      </div>
      <div>{movieDetails.overview}</div>
    </>
    }




  </div>);
}
