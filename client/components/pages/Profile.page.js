import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import SideMenu from "../../layout/SideMenu";
// import TopBar from "../../layout/TopBar";


const UserProfilePage = (props) => {
	
	return (
		<div className="profile-page">
			<div>
				{/* <SideMenu css={closeCss}></SideMenu>
				<TopBar onClick={clickToggle} css={closeCss}></TopBar> */}
				<div className="container">
					<div className="dashboard-bar dashboard">My Profile</div>
					<div className="dashboard-main dashboard">
						<div className="card">
							<div className="card-header">
								<div className="profile-picture-card ">
									
								</div>
								<div className="profile-name-card">
									<div className="username">userName</div>
									<div className="role"> department</div>
								</div>
							</div>

							<div>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">Username: </li>
									<li className="list-group-item">Role: </li>
									<li className="list-group-item">Email:</li>
									<li className="list-group-item">
										User since: 
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfilePage;