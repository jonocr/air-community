import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LoginPage from './pages/Login.page';
import UserProfilePage from './pages/Profile.page';

class App extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    // this.state = getInitialState();
  }
  
  handleClick() {

  }

  render() { 

    return (
      <div>
        <Router>
        <ul>
        <li>
          <Link to='/#/my-profile'>Profile</Link>
        </li>
        {/* <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li> */}
      </ul>
					<Route component={LoginPage} exact path="/login" />
					{/* <Route component={LoginPage} exact path="/" /> */}
					{/* <Route component={UserProfilePage} exact path="/my-profile" /> */}
          <Route path='/#/my-profile'>
            <UserProfilePage />
          </Route>
        {/* <h1>
          APP.JS
        </h1>
        <LoginPage/> */}
        </Router>
      </div>
    );
  }
}

export default App;
