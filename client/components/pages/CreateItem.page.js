import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/Auth.context";
import Menu from '../layout/Menu.layout';

const CreateItemPage = (props) => {
	const abortController = new AbortController();
  const { user, setUser} = useContext(AuthContext);
	const [item, setItem] = useState({ name: '', description: '', cost: 0, ownerId: ''});
  const history = useHistory();
	
	useEffect(() => {
    if (!user) history.push('/');
    setItem({ ...item, ownerId: user.id })
	}, []);

	const saveHandler = (e) => {
		e.preventDefault();
		fetch(`/items/create`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(item),
		})
		.then(response => response.json())
		.then(data => {
      history.push('/search-items');
		})

		return function cleanup() {
			abortController.abort();
		};
	}
	return (
		<div className="profile-page item-page">
		<Menu/>
			{user ? (
				<div>
					<div className="container">
						<div className="dashboard-bar dashboard">Create Item</div>
						<div className="dashboard-main dashboard">
							<div className="card">
								<div className="card-item-header">
								</div>
								<div>
									<ul className="list-group list-group-flush">
										<li className="list-group-item">
                      Title: 
											<input 
												type="text" 
												className="form-control" 
												id="exampleFormControlInput1" 
                        placeholder="Title of the item..." 
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
                      placeholder="Description of the item..." 
											onChange={(e) => setItem({ ...item, description: e.target.value })}
											></input>
										</li>
										<li className="list-group-item">
											Cost: 
											<input 
												type="text" 
												className="form-control" 
												id="exampleFormControlInput3" 
												placeholder="100" 
                        onChange={(e) => setItem({ ...item, cost: e.target.value })}
											>
											</input>
										</li>
										<li className="list-group-item">
											<a className="btn btn-primary" href="#" role="button" onClick={saveHandler}>Create</a> 
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

export default CreateItemPage;