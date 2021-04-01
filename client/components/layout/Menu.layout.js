import React, { useState, useEffect, useContext } from "react";
// import AuthContext from "../utils/AuthContext";
import { Link } from "react-router-dom";

const Menu = (props) => {

	return (		
    <nav className="nav">
      <Link className="nav-link" to='/my-profile'>Profile</Link>
      <Link className="nav-link" to='/search-items'>Search Items</Link>
      <Link className="nav-link" to='/search-items'>Log Out</Link>
    </nav>
	);
};

export default Menu;

