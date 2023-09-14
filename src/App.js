import ClubsTitle from "./components/clubsTitle";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Sign from "./components/sign";
import Layout from "./components/layout/Layout";
import DevelopmentPage from "./pages/DevelopmentPage";
import ArtPage from "./pages/ArtPage";
import SportPage from "./pages/SportPage";
import PosterPage from "./pages/PosterPage";
import React from 'react';

const App = () => {
  return (
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/choice/:name' element={<DevelopmentPage />}/>
              <Route path='/choice/:name' element={<SportPage />}/>
              <Route path='/choice/:name' element={<ArtPage />}/>
              <Route path='/poster' element={<PosterPage />}/>
          </Routes>
  );
};

export default App;