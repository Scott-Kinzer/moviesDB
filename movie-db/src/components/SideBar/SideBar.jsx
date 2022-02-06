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
            <div style={{    padding: "5px",
                            background: "darkgrey",
                            width: "100%",
                            marginTop: "5px",
                            borderRadius: "5px"
}}>
                <div>{name} {username}</div>
                <div>{city}</div>
            </div>
      </div>
        <hr />
      <div className={s.navWrap}>
      <NavLink style={{textDecoration: 'none', color: 'black', opacity: '1', display: 'block'}} to="/"><div  className={s.item}>HOME PAGE</div></NavLink>
          
      <NavLink style={{textDecoration: 'none', color: 'black', opacity: '1'}} to="/movies"><div  className={s.item}>MOVIES</div></NavLink>

      <NavLink style={{textDecoration: 'none', color: 'black', opacity: '1'}} to="/tv"><div  className={s.item}>TV SHOW</div></NavLink>

      <NavLink style={{textDecoration: 'none', color: 'black', opacity: '1'}} to="/people"><div  className={s.item}>PEOPLE</div></NavLink>
      </div>
      <Button style={{marginTop: '10px'}} onClick={() => setIsModalVisibleFunc(true)}>
          SETTING
      </Button>

      <div className={s.blur}></div>

      </div>
      
      );
}
