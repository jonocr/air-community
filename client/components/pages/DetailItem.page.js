import React, { useState, useEffect, useContext } from "react";
import Menu from '../layout/Menu.layout'

const DetailItemPage = (props) => {

	return (
		<div>
		<Menu/>
      <h2>Item Detail</h2>
			<div className="container">
				<div className="dashboard-bar dashboard">Item Detail</div>

				<div className="dashboard-main dashboard">
        
        <div> Title: {location.state.item.name}</div>
        <div> Description: {location.state.item.description}</div>
        <div> Cost: {location.state.item.cost}</div>
        <div> Status: {location.state.item.status}</div>
				
				</div>
			</div>
		</div>
	);
};

export default DetailItemPage;