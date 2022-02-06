import React, { useContext } from 'react';
import { ThemeContext } from '../../context/context';

import s from './home.module.css';

export default function HomePage() {
    const {mode } = useContext(ThemeContext);

  return <div style={mode ? {height: '100%', background: 'grey'} : {height: '100%', background: 'white'}}>
      <div>ONE</div>
  </div>;
}
