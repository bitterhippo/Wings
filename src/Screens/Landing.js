import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";

//Screens
import { Home } from './Home';
import { NotFound } from './NotFound';

//Subcomponents
import { MainWrapper } from '../Components/PPC/MainWrapper';
import { SideBar } from '../Components/SideBar/SideBar';

const Landing = () => {
  return (
    <MainWrapper>
      <SideBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </MainWrapper>
  )
};

export default Landing;