import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Chips from "./chips"
import Pop from "./pop"
import Candy from "./candy"
import VendingMachine from './vendingMachine';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>

     

        <Route exact path="/" element={<VendingMachine />}/>
          
        

        <Route exact path="/pop" element={<Pop />}/>
          
        

        <Route exact path="/candy" element={<Candy />}/>
          
        

      <Route exact path="/chips" element={<Chips />}/>
        
      

 </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
