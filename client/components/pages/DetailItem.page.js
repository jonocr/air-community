import React, { useState, useEffect, useContext } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from "../contexts/Auth.context";
import Menu from '../layout/Menu.layout'

const DetailItemPage = (props) => {
  const { user, setUser} = useContext(AuthContext);
	const [item, setItem] = useState(null);
  const history = useHistory();
	const location = useLocation();

  useEffect(() => {
    if (!user) history.push('/');   
		if (location.state.item) setItem(location.state.item);
	}, []);

	const rentHandler = (e) => {
		e.preventDefault();
		fetch(`/items/rent/${item._id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({renterId: user.id}),
		})
		.then(response => response.json())
		.then(data => {
			setItem(data);		
		})
	}

	const returnHandler = (e) => {
		e.preventDefault();
		fetch(`/items/return/${item._id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
		})
		.then(response => response.json())
		.then(data => {
			setItem(data);		
		})
	}

	const saveHandler = (e) => {
		e.preventDefault();
		fetch(`/items/${item._id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(item),
		})
		.then(response => response.json())
		.then(data => {
			setItem(data);		
		})
	}

	const deleteHandler = (e) => {
		e.preventDefault();
		fetch(`/items/delete/${item._id}`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(item),
		})
		.then(response => response.json())
		.then(data => {
			history.push('/my-profile'); 		
		})
	}

	return (
		<div>
		<Menu/>
		{ item ? (
			<div className="container">
				<div className="dashboard-bar dashboard">Item Detail</div>

				<div className="dashboard-main dashboard">
        <div className="card">
					<div className="card-item-header">
						</div>
						<div>
							{ item.ownerId === user.id ? (
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										Title: 
										<input 
											type="text" 
											className="form-control" 
											id="exampleFormControlInput1" 
											value={item.name} 
											onChange={(e) => setItem({ ...item, name: e.target.value })}
											>
										</input>
									</li>
									<li className="list-group-item">
										Description:
										<input 
											type="text" 
											className="form-control" 
											id="exampleFormControlInput2" 
											value={item.description} 
											onChange={(e) => setItem({ ...item, description: e.target.value })}
											>
										</input>
									</li>
									<li className="list-group-item">
										Cost:
										<input 
											type="text" 
											className="form-control" 
											id="exampleFormControlInput3" 
											value={item.cost} 
											onChange={(e) => setItem({ ...item, cost: e.target.value })}
											>
										</input>
									</li>
									<li className="list-group-item">
										Status: {item.status}
									</li>
									{ item.status === 'available' ? (
										<li className="list-group-item">
											<a className="btn btn-primary" href="#" role="button" onClick={saveHandler}>Save</a> 
											{item.status === 'available' ? (
											<a className="btn btn-light btn-delete" href="#" role="button" onClick={deleteHandler}>Delete</a> 
											) : (
												''
											)}
										</li>
									) : (
										''
									)}								
								</ul>
								) : (
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										Title: {item.name}
									</li>
									<li className="list-group-item">
										Description: {item.description}
									</li>
									<li className="list-group-item">
										Cost: {item.cost}
									</li>
									<li className="list-group-item">
										Status: {item.status}
									</li>
									{ item.status === 'available' ? (
										<li className="list-group-item">
											<a className="btn btn-primary" href="#" role="button" onClick={rentHandler}>Rent</a> 
										</li>
									) : (
										<li className="list-group-item">
											<a className="btn btn-primary" href="#" role="button" onClick={returnHandler}>Return</a> 
										</li>
									)}									
								</ul>
							)}
						</div>
					</div>				
				</div>
			</div>
		) : (
			<div>Loading...</div>)
		}
		</div>
	);
};

export default DetailItemPage;