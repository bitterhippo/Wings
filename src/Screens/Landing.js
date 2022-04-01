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
import { LogIn } from './LogIn';
import { Community} from './Community';
import { Settings } from './Settings';
import { Information } from './Information';
import { SignUp } from './SignUp';
import { Tools } from './Tools';

//Subcomponents
import { MainWrapper } from '../Components/PPC/MainWrapper';
import { SideBar } from '../Components/SideBar/SideBar';

const Landing = () => {
  return (
    <Router>
      <MainWrapper>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/information" element={<Information />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/community" element={<Community />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainWrapper>
    </Router>
  )
};

export default Landing;