import React from 'react';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>FISH STORE 06.24.2019:</h1>
        <br />
        <h2>YOU ARE LOGGED IN</h2>
        <h1>Home</h1>
        <br />
        <button className="logout-btn btn btn-secondary">Logout</button>
      </div>
    );
  }
}

export default Home;
