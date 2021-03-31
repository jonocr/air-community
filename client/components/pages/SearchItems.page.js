import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import ItemsList from '../ItemsList';

const ItemSearchPage = (props) => {

	const [closeCss, setCloseCss] = useState("");
	const [items, setItems] = useState([]);
	const [itemId, setItemId] = useState('');
  const history = useHistory();
  const handleClick = (item) => {
    console.log("Onclick: ", item._id);
    history.push({
      pathname:`/item-detail/${item._id}`,
      state: { item: item }
    }
  )};
	// const [loaded, setLoaded] = useState(false);


	useEffect(() => {
    
    fetch('/items')
      .then(response => response.json())
      .then(items => {
        setItems(items);
        // setLoaded(true);
      });
    console.log("UseEffect: ", items);
	}, []);

	return (
		<div>
      <h2>Search Items</h2>
			{/* <SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar> */}
			<div className="container">
				<div className="dashboard-bar dashboard">Item Search</div>

				<div className="dashboard-main dashboard">
        <ItemsList data={items} onClick={handleClick}></ItemsList>
				
				</div>
			</div>
		</div>
	);
};

export default ItemSearchPage;