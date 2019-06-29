import React from 'react';

import Fish from '../Fish/fish';

import './Inventory.scss';

class Inventory extends React.Component {
  render() {
    const fishComponents = this.props.fishes.map(fish => (
      <Fish key={fish.id} fish={fish}/>
    ));

    return (
      <div className="Inventory">
        <h5>Inventory</h5>
        <ul className="fishes">
          {fishComponents}
        </ul>
      </div>
    );
  }
}

export default Inventory;
