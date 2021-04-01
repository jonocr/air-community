import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { AuthContext } from "../contexts/Auth.context";
import ItemsList from '../ItemsList';
import Menu from '../layout/Menu.layout'

const ItemSearchPage = (props) => {
	const abortController = new AbortController();
  const { user, setUser} = useContext(AuthContext);
	const [items, setItems] = useState([]);
  const history = useHistory();
  const handleClick = (item) => {
    history.push({
      pathname:`/item-detail/${item._id}`,
      state: { item: item }
    }
  )};


	useEffect(() => {
    if (!user) {
      history.push('/');
      } else {
      fetch('/items')
        .then(response => response.json())
        .then(items => {
          setItems(items);
          // setLoaded(true);
        });
    }

		return function cleanup() {
			abortController.abort();
		};
	}, []);

	return (
		<div>	
		<Menu/>
      {/* <SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar> */}
      { user ? (
      <div>
        <h2>Search Items</h2>
      
        <div className="container">
          <div className="dashboard-bar dashboard">Item Search</div>

          <div className="dashboard-main dashboard">
          <ItemsList data={items} onClick={handleClick}></ItemsList>
          
          </div>
        </div>
      </div>
      ) :
      (<div>loading...</div>)
      }
      
		</div>
	);
};

export default ItemSearchPage;