import React, { useContext } from 'react';
import { ThemeContext } from '../../context/context';
import SliderComponent from '../SliderComponent/SliderComponent';
import UpComingComponent from '../UpComingComponent/UpComingComponent';

import s from './home.module.css';


export default function HomePage() {
    const { mode } = useContext(ThemeContext);

    return <div className={mode ? s.homeModeOn : s.homeModeOff
     }>
        <SliderComponent />

        
        <UpComingComponent/>

    
    </div>;
}
