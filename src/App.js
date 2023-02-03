import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import NavBar from "./Components/NavBar"

import Home from './Pages/home';
import Events0 from './Pages/events0';
import Events1 from './Pages/events1';
import Events2 from './Pages/events2';
import Gallery from './Pages/gallery';
import Team from './Pages/ourTeam';
import Merch from './Pages/merch';
import Sponsors from './Pages/sponsors';
import SubCouncils from './Pages/subCouncils';
import NavBar from './Components/NavBar';
import Footer from "./Components/Footer"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/events0' element={<Events0 />} />
        <Route exact path='/events1' element={<Events1 />} />
        <Route exact path='/events2' element={<Events2 />} />
        <Route exact path='/gallery' element={<Gallery />} />
        <Route exact path='/merch' element={<Merch />} />
        <Route exact path='/ourTeam' element={<Team />} />
        <Route exact path='/sponsers' element={<Sponsors />} />
        <Route exact path='/subCouncils' element={<SubCouncils />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;