import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import DevelopmentPage from "./pages/developmentPage/developmentPage";
import SportPage from "./pages/sportPage/sportPage";
import ArtPage from "./pages/artPage/artPage";
import PosterPage from "./pages/posterPage/posterPage";
import SignUp from "./pages/signUp/SignUp";

const App = () => {
  return (
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/sign-up' element={<SignUp/>} />
              <Route path='/choice/:name' element={<DevelopmentPage />}/>
              <Route path='/choice/:name' element={<SportPage />}/>
              <Route path='/choice/:name' element={<ArtPage />}/>
              <Route path='/poster' element={<PosterPage />}/>
          </Routes>
  );
};

export default App;