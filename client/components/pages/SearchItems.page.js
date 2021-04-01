import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { AuthContext } from "../contexts/Auth.context";
import ItemsList from '../ItemsList';
import Menu from '../layout/Menu.layout'

const ItemSearchPage = (props) => {
	const abortController = new AbortController();
  const { user, setUser} = useContext(AuthContext);
	const [items, setItems] = useState([]);
	const [query, setQuery] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/');
      } else {
      fetch('/items')
        .then(response => response.json())
        .then(items => {
          setItems(items);
        });
    }

		return function cleanup() {
			abortController.abort();
		};
	}, []);

  const handleClick = (item) => {
    history.push({
      pathname:`/item-detail/${item._id}`,
      state: { item: item }
    }
  )};

  const searchHandler = () => {
    fetch(`/items/${query}`)
      .then(response => response.json())
      .then(items => {
        setItems(items);
      });
  };

	return (
		<div>	
		<Menu/>
      { user ? (
      <div>      
        <div className="container">
          <div className="dashboard-bar dashboard">Item Search</div>
          <div className="row search-item">
            <div className="col-3">
              <input 
                type="text" 
                className="form-control" 
                id="exampleFormControlInput3" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}
                >
              </input>
            </div>
              <a className="btn btn-primary" href="#" role="button" onClick={searchHandler}>Search</a> 
            <div className="col-3">
            </div>
            <div className="col-2">
            </div>

            <div className="col-4">
            </div>
          </div>
          <div className="dashboard-main dashboard">
          <ItemsList data={items} onClick={handleClick}></ItemsList>
          
          </div>
        </div>
      </div>
      ) :
      (<div>loading...</div>)
      }
      
		</div>
	);
};

export default ItemSearchPage;