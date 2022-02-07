import { FileAddOutlined } from '@ant-design/icons/lib/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addMoviesToCart } from '../../features/movies/moviesSlice';


import s from './movie.item.module.css';

export default function MovieItem({ movie }) {

    const dispatch = useDispatch();

    return (
            <div className={s.movieItem}>
                {movie.name ? 
                  <NavLink to={`/tv/${movie.id}`}>
                  {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />}
                  <div className={s.itemTitle}>{movie.original_title ||  movie.name }</div>
                  </NavLink> :

                    <NavLink to={`/movie/${movie.id}`}>
                    {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />}
                    <div className={s.itemTitle}>{movie.original_title ||  movie.name }</div>
                    </NavLink>
            
            }
   
                <FileAddOutlined
                onClick={() => {
                    dispatch(addMoviesToCart({...movie, rating: 0}));                    
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
