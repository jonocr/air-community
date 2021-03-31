import React from 'react';

const LoginPage = () => {
  return (
		<div className="login-body">
			<div className="login-container">
				<div role="alert">
					Incorrect email or password.
					<button type="button" className="close">
						<span>&times;</span>
					</button>
				</div>
				<form >
					<div className="form-group">
						<label htmlFor="emailInput">Email address</label>
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							placeholder="name@example.com"
							// onChange={(e) => setUser({ ...user, email: e.target.value })}
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
							// onChange={(e) => setUser({ ...user, password: e.target.value })}
						/>
					</div>

					<div className="form-group row">
						<button type="submit" className="btn btn-primary">
							Login
						</button>
					</div>
				</form>
				<div className="no-account">
					{/* Don't have account ? <Link to="/new-account">Sign Up Here</Link> */}
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
