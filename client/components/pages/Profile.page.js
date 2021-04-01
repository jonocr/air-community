import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/Auth.context";
import Menu from '../layout/Menu.layout'

const UserProfilePage = (props) => {
  const { user, setUser} = useContext(AuthContext);
  const history = useHistory();
	
	useEffect(() => {
    if (!user) history.push('/');
	}, []);

	return (
		<div className="profile-page">
		<Menu/>
			{user ? (
				<div>
					<div className="container">
						<div className="dashboard-bar dashboard">My Profile</div>
						<div className="dashboard-main dashboard">
							<div className="card">
								<div className="card-header">
									<div className="profile-picture-card ">
										<img
											src='https://randomuser.me/api/portraits/lego/7.jpg'
											className="profile-picture rounded-circle"
											alt="Profile Flag">
										</img>
									</div>
									<div className="profile-name-card">
										<div className="username">{user.firstName}</div>
										<div className="role"> {user.lastName}</div>
									</div>
								</div>

								<div>
									<ul className="list-group list-group-flush">
										<li className="list-group-item">First Name: {user.firstName}</li>
										<li className="list-group-item">Last Name: {user.lastName}</li>
										<li className="list-group-item">Email: {user.email}</li>
										<li className="list-group-item">Location: {user.location}</li>
										<li className="list-group-item">
											<a className="btn btn-primary" href="#" role="button">Save</a> 
											<a className="btn btn-light btn-delete" href="#" role="button">Delete</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				):(<div>Loading...</div>)
			}
		</div>
	);
};

export default UserProfilePage;