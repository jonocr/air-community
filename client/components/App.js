import React, { Component, useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { AuthContext } from './contexts/Auth.context';
import LoginPage from './pages/Login.page';
import UserProfilePage from './pages/Profile.page';
import SearchItems from './pages/SearchItems.page';
import DetailItem from './pages/DetailItem.page';
import CreateItemPage from './pages/CreateItem.page';
import SignUpPage from './pages/SignUp.page';

function App() {
  const [user, setUser] = useState(null);
  const providerUser = useMemo(() => ({user, setUser}), [user, setUser]);

    return (
      <div>
        <Router>
          <AuthContext.Provider value={providerUser}>
            {/* <ul>
              <li>
                <Link to='/my-profile'>Profile</Link>
              </li>
              <li>
                <Link to='/search-items'>Search Items</Link>
              </li>
            </ul> */}
            <Route component={LoginPage} exact path="/" />
            <Route component={SignUpPage} exact path="/signup" />
            <Route path='/my-profile'>
              <UserProfilePage />
            </Route>
            <Route path='/search-items'>
              <SearchItems />
            </Route>
            <Route path='/item-detail/:itemId'>
              <DetailItem />
            </Route>
            <Route path='/create-item'>
              <CreateItemPage />
            </Route>
            {/* create-item */}
          </AuthContext.Provider>
        </Router>
      </div>
    );
}

export default App;
