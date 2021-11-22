import React from "react";
import { Link } from "react-router-dom";

function Candy() {
    return (
        <div>
            <img
            src="https://i5.peapod.com/c/RQ/RQLBU.jpg"
           />
             <h1>
          <Link to="/">go back</Link>
        </h1>
        </div>
    );
}

export default Candy