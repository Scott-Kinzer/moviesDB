import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React from 'react';
import { useSelector } from 'react-redux';
import { removeMovieAtCart } from '../../features/movies/moviesSlice';
import StarsComponent from '../StarsComponent/StarsComponent';

export default function BookMovies({ isModalBookVisible, setIsModalBookVisible }) {

    const movies = useSelector((state) => state.moviesReducer.moviesCart);

  

    const handleOk = () => {
        setIsModalBookVisible(false);
    }

    const handleCancel = () => {
        setIsModalBookVisible(false);
    }


    return <div>
        <Modal title="Booked films" visible={isModalBookVisible} onOk={handleOk} onCancel={handleCancel}>
            
            {movies.map(movie => {
                return (
                    <StarsComponent key={movie.id} movie={movie}/>
                )
            })}
        </Modal>

    </div>;
}
