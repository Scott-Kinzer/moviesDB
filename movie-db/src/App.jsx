import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";

import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';


import { useState } from 'react';
import { ThemeContext } from './context/context';


function App() {

  const [mode, setMode] = useState(false);

  
  return (
    <ThemeContext.Provider value={{mode, setMode}}>
      <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<HomePage />} />
        </Route>
      </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
