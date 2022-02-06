import React, { useState } from 'react';

import { Button } from 'antd';

import { useDispatch } from 'react-redux';

import { removeMovieAtCart, setStar } from '../../features/movies/moviesSlice';
import StarRatings from 'react-star-ratings';


export default function StarsComponent({ movie }) {
    const dispatch = useDispatch();

    const changeRating = (star) => {
        dispatch(setStar({...movie, star}));
    }

    return (
        <div style={{ display: 'flex', marginTop: '5px', alignItems: 'center' , justifyContent: 'space-between'}}>
            <div
            style={{ marginRight: '5px'}}
            key={movie.id}>{movie.original_title}</div>

           <div>
           <StarRatings
                rating={movie.rating}
                starRatedColor="blue"
                changeRating={changeRating}
                numberOfStars={5}
                name='rating'
                starDimension="15px"
            />

            <Button type='primary' style={{ marginLeft: '5px' }}
                onClick={() => dispatch(removeMovieAtCart(movie.id))}
            >DELETE</Button>

           </div>
        </div>
    );
}
