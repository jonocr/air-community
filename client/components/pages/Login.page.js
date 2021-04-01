import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth.context';

const LoginPage = () => {
  const history = useHistory();
	const { user, setUser } = useContext(AuthContext);
	const [login, setLogin] = useState({ email: "", password: "" });
	const loginhandler = (e) => {
		e.preventDefault();
		fetch('/users/login', {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(login),
		})
		.then(response => response.json())
		.then(data => {
			setUser(data);
			// 	//TODO: token: data.token, 
			// console.log("RES value React: ", data);
			history.push({
				pathname:`/search-items/`
			});			
		})
	}
  return (
		<div className="login-body">
			<div className="login-container">
				<form onSubmit={loginhandler}>
					<div className="form-group">
						<label htmlFor="emailInput">Email address</label>
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							placeholder="name@example.com"
							onChange={(e) => setLogin({ ...login, email: e.target.value })}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="passwordInput">Password</label>
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							placeholder="Password"
							onChange={(e) => setLogin({ ...login, password: e.target.value })}
						/>
					</div>

					<div className="form-group row">
						<button type="submit" className="btn btn-primary">
							Login
						</button>
					</div>
				</form>
				<div className="no-account">
					Don't have account ? <Link to="/signup">Sign Up Here</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;





































// class App extends Component {
//   constructor(props) {
//     super(props);
//     // this.handleClick = this.handleClick.bind(this);
//     // this.state = getInitialState();
//   }
  
//   handleClick() {

//   }

//   render() { 

//     return (
//       <div>
//         <h1>
//           APP.JS
//         </h1>
//       </div>
//     );
//   }
// }

// export default App;
