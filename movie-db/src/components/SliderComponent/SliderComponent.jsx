import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import apiIntance from '../../service/movies.service';

// Import Swiper styles
import 'swiper/css';

import MovieItem from '../MovieItem/MovieItem';

export default function SliderComponent() {

    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
        apiIntance.fetchPopularMovies().then(moviesList => setMovies(moviesList));       
    }, []);

    return (
        <div>
            <h2>POPULAR MOVIES</h2>
            <Swiper
                spaceBetween={20}
                autoHeight={true} 
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                    
                {!!movies.length && movies.map(movie => <SwiperSlide key={movie.id}><MovieItem movie={movie} /></SwiperSlide>)}
            </Swiper>

        </div>
    );
}





