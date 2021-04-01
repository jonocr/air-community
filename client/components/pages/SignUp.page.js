import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
	const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', password: '', location: ''});
  const history = useHistory();

	const saveHandler = (e) => {
		e.preventDefault();
		fetch(`/users/create`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newUser),
		})
		.then(response => response.json())
		.then(data => {
      history.push('/');
		})

	}
	return (
		<div className="profile-page item-page">
				<div>
					<div className="container">
						<div className="dashboard-bar dashboard">Sign Up</div>
						<div className="dashboard-main dashboard">
							<div className="card">
								<div className="card-item-header">
								</div>
								<div>
									<ul className="list-group list-group-flush">
										<li className="list-group-item">
                      First Name: 
											<input 
												type="text" 
												className="form-control" 
												id="exampleFormControlInput1" 
                        placeholder="John" 
												onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
												>
											</input>
										</li>
										<li className="list-group-item">
                      Last Name: 
											<input 
											type="text" 
											className="form-control" 
											id="exampleFormControlInput2" 
                      placeholder="Smith" 
											onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
											></input>
										</li>
										<li className="list-group-item">
                      Email: 
											<input 
												type="text" 
												className="form-control" 
												id="exampleFormControlInput3" 
												placeholder="john@gmail.com" 
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
											>
											</input>
										</li>
										<li className="list-group-item">
                      Password: 
											<input 
												type="password" 
												className="form-control" 
												id="exampleFormControlInput4" 
                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
											>
											</input>
										</li>
										<li className="list-group-item">
                      Location: 
											<input 
												type="text" 
												className="form-control" 
												id="exampleFormControlInput5" 
												placeholder="Your Location" 
                        onChange={(e) => setNewUser({ ...newUser, location: e.target.value })}
											>
											</input>
										</li>
										<li className="list-group-item">
											<a className="btn btn-primary" href="#" role="button" onClick={saveHandler}>Create Account</a> 
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

export default SignUpPage;