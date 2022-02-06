import { AlertOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons/lib/icons';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/context';

import s from './header.module.css';


export default function Header({toggle,setToggle}) {

    const {mode, setMode} = useContext(ThemeContext);

    const [small, setSmall] = useState(false);

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

            <div>
                <AlertOutlined onClick={() => setMode(!mode)} style={mode ? { fontSize: '30px', color: 'white'}: 
                { fontSize: '30px', color: 'black'}} />
            </div>
        </div>);
}


