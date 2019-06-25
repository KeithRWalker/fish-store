import React from 'react';

import Inventory from '../Inventory/Inventory';
import NewOrder from '../NewOrder/NewOrder';
import Orders from '../Orders/Orders';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>FISH STORE 06.24.2019:</h1>
        <br />
        <h2>YOU ARE LOGGED IN</h2>
        <br />
        <div className="row">
          <div className="col">
            <Inventory />
          </div>
          <div className="col">
          <NewOrder />
            </div>
          <div className="col">
            <Orders />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
