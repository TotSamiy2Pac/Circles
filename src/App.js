import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import DevelopmentPage from "./pages/developmentPage/developmentPage";
import SportPage from "./pages/sportPage/sportPage";
import ArtPage from "./pages/artPage/artPage";
import PosterPage from "./pages/posterPage/posterPage";

const App = () => {
  return (
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/choice/development' element={<DevelopmentPage />}/>
              <Route path='/choice/sport' element={<SportPage />}/>
              <Route path='/choice/art' element={<ArtPage />}/>
              <Route path='/poster' element={<PosterPage />}/>
          </Routes>
  );
};

export default App;