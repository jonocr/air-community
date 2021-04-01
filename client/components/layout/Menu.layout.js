import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { AuthContext } from "../contexts/Auth.context";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const { user, setUser} = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) history.push('/');
	});

  const logOut = () => {
    setUser(null);
  }
	return (		
    <nav className="nav">
      <Link className="nav-link" to='/my-profile'>Profile</Link>
      <Link className="nav-link" to='/create-item'>Add Item</Link>
      <Link className="nav-link" to='/search-items'>Search Items</Link>
      <Link className="nav-link" to='/search-items' onClick={logOut}>Log Out</Link>
    </nav>
	);
};

export default Menu;

