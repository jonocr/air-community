import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/Auth.context";
import ItemsList from '../ItemsList';
import Menu from '../layout/Menu.layout'

const UserProfilePage = (props) => {
  const { user, setUser} = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
	const [items, setItems] = useState([]);
  const history = useHistory();
	
	useEffect(() => {
    if (!user) history.push('/');
    if (user) setProfile(user);
		getItems();
	}, []);

	const getItems = () => {
		fetch(`/items/user/${user.id}`)
		.then(response => response.json())
		.then(items => {
			setItems(items);
		});
	}

	const saveHandler = (e) => {
		e.preventDefault();
		console.log("Profile User info: ", profile);
		fetch(`/users/${profile.email}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(profile),
		})
		.then(response => response.json())
		.then(data => {
			setUser(data);		
		})
	}

	const handleClick = (item) => {
    history.push({
      pathname:`/item-detail/${item._id}`,
      state: { item: item }
    }
  )};
	return (
		<div className="profile-page">
		<Menu/>
			{profile ? (
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
										<div className="username">{profile.firstName}</div>
										<div className="role"> {profile.lastName}</div>
									</div>
								</div>

								<div>
									<ul className="list-group list-group-flush">
										<li className="list-group-item">First Name: 
											<input 
												type="text" 
												className="form-control" 
												id="exampleFormControlInput1" 
												value={profile.firstName} 
												onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
												>
											</input>
										</li>
										<li className="list-group-item">Last Name: 
											<input 
											type="text" 
											className="form-control" 
											id="exampleFormControlInput2" 
											value={profile.lastName} 
											onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
											></input>
										</li>
										<li className="list-group-item">
											Email: 
											<input 
												type="email" 
												className="form-control" 
												readOnly 
												disabled="disabled" 
												id="exampleFormControlInput3" 
												placeholder="name@example.com" 
												value={profile.email} 
											>
											</input>
										</li>
										<li className="list-group-item">Location: 	
											<input 
												type="text" 
												className="form-control"  
												id="exampleFormControlInput4" 
												value={profile.location} 
												onChange={(e) => setProfile({ ...profile, location: e.target.value })}
											>
											</input>
										</li>
										{items.length > 0 ? (
											<li className="list-group-item">
												<ItemsList data={items} onClick={handleClick}></ItemsList>
											</li>
										):(
											''
										)}
										<li className="list-group-item">
											<a className="btn btn-primary" href="#" role="button" onClick={saveHandler}>Save</a> 
											{/* <a className="btn btn-light btn-delete" href="#" role="button">Delete</a> */}
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