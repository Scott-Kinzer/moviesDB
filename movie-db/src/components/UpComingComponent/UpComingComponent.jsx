import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import apiIntance from '../../service/movies.service';
import MovieItem from '../MovieItem/MovieItem';


import s from './upcoming.module.css';

export default function UpComingComponent() {


    const [moviesUpComing, setMovies] = useState([]);

    const [numbers, setNumbers] = useState(2);

    const [disable, setDisabled] = useState(false);

  
    useEffect(() => {
        apiIntance.fetchUpcomingMovies().then(moviesList => setMovies(moviesList));
    }, []);


  return (<div className={s.UpComingWrapper}>

      <h2>UP COMING MOVIES</h2>
   
   
   <div className={s.UpComingWrapperSub}>
   {!!moviesUpComing.length && Array.from(Array(numbers).keys()).map((_, i) => 
    <MovieItem key={moviesUpComing[i].id} movie={moviesUpComing[i]}/>)}
   </div>
    <Button style={{marginTop: '50px'}} onClick={() => {
        if (numbers >= moviesUpComing.length - 1) {
            setDisabled(true);
            return;
        }

        setNumbers(state => state + 2);

    }} disabled={disable}>SHOW MORE</Button>

  </div>)
}
