import React from 'react';
import { NavLink } from 'react-router-dom';


import s from './movie.item.module.css';

export default function MovieItem({ movie }) {

    return (<NavLink to={`/movie/${movie.id}`}>
            <div className={s.movieItem}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
                <div className={s.itemTitle}>{movie.original_title}</div>

            </div>
    </NavLink>);
}
