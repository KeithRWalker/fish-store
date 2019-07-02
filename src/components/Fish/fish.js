import React from 'react';
import PropTypes from 'prop-types';

import fishShapes from '../../helpers/propz/fishShapes';
import format from '../../helpers/format';

import './fish.scss';

class Fish extends React.Component {
  static propTypes = {
    fishes: PropTypes.arrayOf(fishShapes.fishShape),
    addFishToOrder: PropTypes.func.isRequired,
  };

  addClickEvent = (e) => {
    const { fish, addFishToOrder } = this.props;
    e.preventDefault();
    addFishToOrder(fish.id);
  };

  render() {
    const { fish } = this.props;
    const isAvailable = fish.status === 'available';
    // eslint-disable-next-line
    const image = require(`${fish.image}`)
    return (
      <li className="Fish">

        <img src={image} alt={fish.name} />

        <h3 className="name">

          {fish.name}

          <span className="price">{format.formatPrice(fish.price)}</span>

        </h3>

        <p>{fish.desc}</p>

        <button className="btn btn-outline-success"
          disabled={!isAvailable}
          onClick={this.addClickEvent}
        >
          {isAvailable ? 'Add To Order' : 'Sold Out!'}
        </button>

      </li>
    );
  }
}

export default Fish;
