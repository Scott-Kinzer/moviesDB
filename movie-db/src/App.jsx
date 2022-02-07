import './App.css';

import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';


import { useState } from 'react';
import { ThemeContext } from './context/context';
import MovieDetails from './components/MovieDetails/MovieDetails';

import 'antd/dist/antd.css';
import './index.css';
import Movies from './components/Movies/Movies';
import TVComponent from './components/TVComponent/TVComponent';
import TvDetails from './components/TvDetails/TvDetails';
import PeopleComponent from './components/PeopleComponent/PeopleComponent';



function App() {

  const [mode, setMode] = useState(false);



  return (

        <ThemeContext.Provider value={{mode, setMode}}>
          <div className="app">
          <Routes>

            <Route path="/" element={<Layout />}>
   
              <Route index  element={<HomePage />} />
              <Route path='/movie/:movieId'  element={<MovieDetails />} />
              <Route path='/tv/:tvId'  element={<TvDetails />} />
              <Route path="/movies"  element={<Movies />} />
              <Route path="/tv"  element={< TVComponent />} />
              <Route path="/people"  element={< PeopleComponent />} />

              

            </Route>

          </Routes>
          </div>
    </ThemeContext.Provider>


    
  );
}

export default App;
