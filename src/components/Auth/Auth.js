import React from 'react';

import './Auth.scss';

class Auth extends React.Component {
  render() {
    return (
      <div className="Auth">
        <h1>FISH STORE 06.24.2019:</h1>
        <h1>Auth</h1>
        <button className="auth-btn btn btn-secondary">Login With Google</button>
      </div>
    );
  }
}

export default Auth;
