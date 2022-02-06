import { Button } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import s from './sidebar.module.css';

export default function SideBar({toggle, setIsModalVisibleFunc}) {


   const {name, username, city} = useSelector(state => state.userReducer.user);

  return (
    <div className={!toggle ? s.sideBarWrapper : s.sideBarWrapperHidden}>

      <div className={s.userInfoWrapper}>
            <img src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-320-80.jpg" alt="" />
            <div>
                <div>{name} {username}</div>
                <div>{city}</div>
            </div>
      </div>
        <hr />
      <div className={s.navWrap}>
          <div  className={s.item}><NavLink style={{textDecoration: 'none', color: 'black'}} to="/">HOME PAGE</NavLink></div>
          <div  className={s.item}><NavLink style={{textDecoration: 'none', color: 'black'}} to="movies">MOVIES</NavLink></div>
          <div  className={s.item}><NavLink style={{textDecoration: 'none', color: 'black'}} to="tv">TV SHOW</NavLink></div>
          <div  className={s.item}><NavLink style={{textDecoration: 'none', color: 'black'}} to="people">PEOPLE</NavLink></div>
      </div>
      <Button onClick={() => setIsModalVisibleFunc(true)}>
          SETTINGS
      </Button>

      </div>
      
      );
}
