import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import ItemsList from '../ItemsList';

const DetailItemPage = (props) => {
  const location = useLocation();

	const [closeCss, setCloseCss] = useState("");
	const [items, setItems] = useState([]);
	// const [loaded, setLoaded] = useState(false);


	useEffect(() => {
    
    // fetch(`/items/`)
    //   .then(response => response.json())
    //   .then(items => {
    //     setItems(items);
    //     // setLoaded(true);
    //   });
    console.log("Item Detail UseEffect: ", location.state);
	}, []);

  useEffect(() => {
    console.log("Render: ");
	});

	return (
		<div>
      <h2>Item Detail</h2>
			{/* <SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar> */}
			<div className="container">
				<div className="dashboard-bar dashboard">Item Detail</div>

				<div className="dashboard-main dashboard">
        
        <div> Title: {location.state.item.title}</div>
        <div> Description: {location.state.item.description}</div>
        <div> Cost: {location.state.item.cost}</div>
        <div> Status: {location.state.item.status}</div>
				
				</div>
			</div>
		</div>
	);
};

export default DetailItemPage;