
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PorPais from "./PorPais";
import PorCapital from './PorCapital';
import PorRegion from './PorRegion';
import Bienvenida from "./Bienvenida";
import Navbar from './Navbar';




const AppRouter = () => {
  return (
    <Router>
      <div>

      <Navbar/>

        <Routes>
          <Route path="/" element={<Bienvenida/>} />
          <Route path="/pais/:id" element={<PorPais/>} />
          <Route path="/capital" element={<PorCapital/>} />
          <Route path="/region" element={<PorRegion/>} />
          <Route path="*" element={<Bienvenida />} />
        </Routes>
        
      
      
      </div>
    </Router>
  )
}

export default AppRouter