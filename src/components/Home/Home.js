import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Inventory from '../Inventory/Inventory';
import NewOrder from '../NewOrder/NewOrder';
import Orders from '../Orders/Orders';

import ordersData from '../../helpers/data/ordersData';
import fishData from '../../helpers/data/fishData';

import './Home.scss';

class Home extends React.Component {
  state = {
    orders: [],
    fishes: [],
    fishOrder: {},
  }

  getOrders = () => {
    ordersData.getMyOrders(firebase.auth().currentUser.uid)
      .then(orders => this.setState({ orders }))
      .catch(err => console.error('error', err));
  };

  componentDidMount() {
    fishData.getFishes()
      .then(fishes => this.setState({ fishes }))
      .catch(err => console.error('Error in Home.js, fishData.getFishes()', err));

    this.getOrders();
  }

  deleteOrder = (orderId) => {
    console.error(`You have deleted ${orderId}`);
    ordersData.deleteOrder(orderId)
      .then(() => this.getOrders())
      .catch(err => console.error('Error in Home.js, deleteOrder()', err));
  }

  addFishToOrder = (fishId) => {
    const fishOrderCopy = { ...this.setState.fishOrder };
    fishOrderCopy[fishId] = fishOrderCopy[fishId] + 1 || 1;
    this.setState({ fishOrder: fishOrderCopy });
  }

  removeFromOrder = (fishId) => {
    const fishOrderCopy = { ...this.state.fishOrder };
    delete fishOrderCopy[fishId];
    this.setState({ fishOrder: fishOrderCopy });
  };

  render() {
    const { fishes, orders, fishOrder } = this.state;
    return (
      <div className="Home">
        <h1>FISH STORE 06.24.2019:</h1>
        <p>(YOU ARE LOGGED IN)</p>

          <br />

        <div className="row">

          <div className="col">
            <Inventory fishes={fishes} addFishToOrder={this.addFishToOrder}/>
          </div>

          <div className="col">
            <NewOrder fishes={fishes}
            fishOrder={fishOrder}
            removeFromOrder={this.removeFromOrder}
            />
          </div>

          <div className="col">
            <Orders orders={orders} deleteOrder={this.deleteOrder}/>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
