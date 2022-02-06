import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../context/context';

import Header from '../Header/Header';
import SettingsComponent from '../SettingsComponent/SettingsComponent';
import SideBar from '../SideBar/SideBar';

import s from './layout.module.css';



export default function Layout() {

    const [toggle, setToggle] = useState(false);
    // const {mode, setMode} = useContext(ThemeContext);
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div>
        <div className={s.layoutWrapper}>
            <SideBar toggle={toggle} setIsModalVisibleFunc={setIsModalVisible} />
            <div className={!toggle ? s.subLayoutWrapper : s.subLayoutWrapperFull}>
                <Header toggle={toggle} setToggle={setToggle} />
                    <Outlet  />

            </div>
        </div>
            
           {isModalVisible && (
           <>
            <SettingsComponent  setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible}/>
           </>) }
        </div>
    );
}
