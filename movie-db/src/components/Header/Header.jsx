import { AlertOutlined, LeftOutlined, RightOutlined, SaveOutlined } from '@ant-design/icons/lib/icons';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/context';

import s from './header.module.css';


export default function Header({toggle,setToggle}) {

    const {mode, setMode} = useContext(ThemeContext);

    const [small, setSmall] = useState(false);

    const count = useSelector((state) => state.moviesReducer.moviesCart.length);

    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>
          setSmall(window.pageYOffset > 50)
        );
      }
    }, []);
  

    return (
        <div className={`${s.header} ${small ? s.small : ""} `}>
            <div>
                {!toggle ? 
                
                (<LeftOutlined 

                onClick={() => setToggle(true)}

                style={{ fontSize: '30px', color: '#08c'}} />):

               (<RightOutlined 

                onClick={() => setToggle(false)} 
                
                style={{ fontSize: '30px', color: '#08c'}} />)
            
    
            }
            </div>

           <NavLink to="/"> <h2 className={s.title}>MOVIE DB</h2></NavLink>

            <div style={{display: 'flex'}}>
                <AlertOutlined onClick={() => setMode(!mode)} style={mode ? { fontSize: '30px', color: 'white'}: 
                { fontSize: '30px', color: 'black'}} />


                <div style={{position: 'relative'}}>
                    <SaveOutlined style={ { fontSize: '30px', color: 'black', marginLeft: '15px'}} />
                    <div style={{position: 'absolute', right: '-4px',fontSize: '15px', top: '-16px', fontWeight: 'bolder'}}>{count}</div>
                </div>
                
            </div>

        </div>);
}


