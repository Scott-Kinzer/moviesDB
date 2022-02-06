import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import BookMovies from '../BookMovies/BookMovies';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import SettingsComponent from '../SettingsComponent/SettingsComponent';
import SideBar from '../SideBar/SideBar';

import s from './layout.module.css';



export default function Layout() {

    const [toggle, setToggle] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalBookVisible, setIsModalBookVisible] = useState(false);


    return (
        <div>
        <div className={s.layoutWrapper}>
            <SideBar toggle={toggle} setIsModalVisibleFunc={setIsModalVisible} />
            <div className={!toggle ? s.subLayoutWrapper : s.subLayoutWrapperFull}>
                <Header toggle={toggle} setToggle={setToggle} setIsModalBookVisible={setIsModalBookVisible} />
                    <Outlet  />
                    <Footer />
            </div>
        </div>
            
           {isModalVisible && (
           <>
            <SettingsComponent  setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible}/>
           </>) }

           {isModalBookVisible && (
           <>
            <BookMovies  setIsModalBookVisible={setIsModalBookVisible} isModalBookVisible={isModalBookVisible}/>
           </>) }

         


        </div>
    );
}
