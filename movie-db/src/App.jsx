import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";

import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';


import { useState } from 'react';
import { ThemeContext } from './context/context';
import MovieDetails from './components/MovieDetails/MovieDetails';

import 'antd/dist/antd.css';
import './index.css';
import Movies from './components/Movies/Movies';

function App() {

  const [mode, setMode] = useState(false);

  
  return (
    <ThemeContext.Provider value={{mode, setMode}}>
      <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<HomePage />} />
          <Route path='/movie/:movieId'  element={<MovieDetails />} />
          <Route path="/movies"  element={<Movies />} />

        </Route>
      </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
