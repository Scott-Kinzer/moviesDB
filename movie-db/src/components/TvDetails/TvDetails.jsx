import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


import s from './tv.details.module.css';

import { ThemeContext } from '../../context/context';
import apiIntance from '../../service/tv.service';
import { useDispatch } from 'react-redux';
import { fetchDetailsTV } from '../../features/tv/tvSlice';


export default function TvDetails() {

  const { tvId } = useParams();
  const tvDetails = useSelector(state => state.tvReducer.tvDetails);
  const { mode } = useContext(ThemeContext);
    const dispatch = useDispatch();

  useEffect(() => {
        dispatch(fetchDetailsTV({tvId}));

  }, []);

return (<div className={mode ? s.dark : ""} >

{tvDetails && 
<>
  <div className={s.tvWrapper}>
  {tvDetails.backdrop_path ? <img src={`https://image.tmdb.org/t/p/w500/${tvDetails.backdrop_path}`} alt="" /> : 
  <div>NP PHOTO</div>}
      <div className={s.tvDescrWrapper}>
          <div>ORIGINAL TITLE: {tvDetails.original_name}</div>

          <div>RELEASE DATE: {tvDetails.first_air_date}</div>
          <div>RATING: {tvDetails.vote_average}</div>
      </div>
  </div>
  <div>{tvDetails.overview}</div>
</>
}

</div>);
}
