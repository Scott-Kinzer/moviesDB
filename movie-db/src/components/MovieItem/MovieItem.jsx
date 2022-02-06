import { FileAddOutlined } from '@ant-design/icons/lib/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';


import s from './movie.item.module.css';

export default function MovieItem({ movie }) {

    return (
            <div className={s.movieItem}>
                <NavLink to={`/movie/${movie.id}`}>
                {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />}
                <div className={s.itemTitle}>{movie.original_title}</div>
                </NavLink>
                <FileAddOutlined
                onClick={(e) => {
                    e.stopPropagation();
                    console.log('hello');
                }}
                
                style={{
                    // display: 'block',
                    position: 'absolute',
                    top: '0',
                    width: '50px',
                    height: '50px',
                    background: 'white',
                    fontSize: '27px',
                    right: '0',
                    borderRadius: '0px 0px 0px 30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems:'center',
                    
                }} />
            </div>
    );
}
