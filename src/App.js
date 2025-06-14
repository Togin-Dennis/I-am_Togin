import React from 'react'
import Home from './Home/Home'
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import RoboticPixelDraw from './cursor'
import About from './About/About';
import Contact from './Contact/Contact';
import Loading from './Loading/Loading';

function App() {
  return (
    <div>
<Router>
  <Routes basename="/I_AM_TOGIN">
    <Route path="/" element={<Home />} />
    <Route path="/About" element={ <About/>} />
    <Route path="/Contact" element={ <Contact/>} />
    <Route path="/Loading" element={ <Loading/>} />
</Routes>
</Router>
<RoboticPixelDraw/>
    </div>
  )
}

export default App
