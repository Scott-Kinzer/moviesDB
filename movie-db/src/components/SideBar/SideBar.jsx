import { Button } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './sidebar.module.css';

export default function SideBar({toggle, setIsModalVisibleFunc}) {
  return (
    <div className={!toggle ? s.sideBarWrapper : s.sideBarWrapperHidden}>

      <div className={s.userInfoWrapper}>
            <img src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-320-80.jpg" alt="" />
            <div>
                <div>NAME USERNAME</div>
                <div>CITY</div>
            </div>
      </div>
        <hr />
      <div className={s.navWrap}>
          <div><NavLink style={{textDecoration: 'none'}} to="/">HOME PAGE</NavLink></div>
          <div><NavLink style={{textDecoration: 'none'}} to="movies">MOVIES</NavLink></div>
          <div><NavLink style={{textDecoration: 'none'}} to="tv">TV SHOW</NavLink></div>
          <div><NavLink style={{textDecoration: 'none'}} to="people">PEOPLE</NavLink></div>
      </div>
      <Button onClick={() => setIsModalVisibleFunc(true)}>
          SETTINGS
      </Button>

      </div>
      
      );
}
