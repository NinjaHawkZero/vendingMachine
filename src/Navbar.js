import React from "react";
import { NavLink } from "react-router-dom";



function Navbar() {

    return (
    <nav className="NavBar">
    <NavLink exact to="/">
      VendingMachine
    </NavLink>
    <NavLink exact to="/pop">
      Pop
    </NavLink>
    <NavLink exact to="/candy">
      Candy
    </NavLink>
    <NavLink exact to="/chips">
        Chips
    </NavLink>
  </nav>


    )
    
}


export default Navbar