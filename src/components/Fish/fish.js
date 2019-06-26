import React from 'react';

import fishShape from '../../helpers/propz/fishShapes';

import './fish.scss';

class Fish extends React.Component {
  static propTypes = {
    fish: fishShape.fishShape,
  }

  render() {
    const { fish } = this.props;
    const altTxt = `${fish.name} ${fish.desc}`;
    return (
      <li className="Fish">
        <img className="image" src={fish.image} alt={altTxt}></img>
        <h3 className="name">{fish.name}</h3>
        <p className="desc">{fish.desc}</p>
      </li>
    );
  }
}

export default Fish;
