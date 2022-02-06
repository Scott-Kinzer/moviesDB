import { Button } from 'antd';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../context/context';
import apiIntance from '../../service/movies.service';
import MovieItem from '../MovieItem/MovieItem';


import s from './movie.details.module.css';

export default function MovieDetails() {

  const {movieId} = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const [manualTrigger, setManualTrigger] = useState(false);

  const { mode } = useContext(ThemeContext);

  const [randommovieDetails, setRandomMovieDetails] = useState(null);

  const randomNumber = useMemo(() => {
        return Math.floor(Math.random() * (450000 - 400000 + 1)) + 400000;
    }, [movieId, manualTrigger]);

  useEffect(() => {
    apiIntance.fetchMovieById(movieId).then(setMovieDetails);
  }, [movieId]);

  useEffect(() => {
    apiIntance.fetchMovieById(randomNumber).then(setRandomMovieDetails);
  }, [randomNumber]);

  const manualTriggerF = () => {
    setManualTrigger(!manualTrigger);
  }

  return (<div className={s.detailsWrapper, mode ? s.dark: ""} >

    {movieDetails && 
    <>
      <div className={s.movieWrapper}>
      {movieDetails.backdrop_path ? <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`} alt="" /> : 
      <div>NP PHOTO</div>}
          <div className={s.movieDescrWrapper}>
              <div>ORIGINAL TITLE: {movieDetails.original_title}</div>
              <div>RELEASE DATE: {movieDetails.release_date}</div>
              <div>RATING: {movieDetails.vote_average}</div>
          </div>
      </div>
      <div>{movieDetails.overview}</div>
    </>
    }

    <h2>RANDOM MOVIE</h2>
    <Button onClick={() => manualTriggerF()}>RERENDER MOVIE</Button>
   {randommovieDetails && <MovieItem movie={randommovieDetails} />}


  </div>);
}
