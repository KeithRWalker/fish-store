import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  // loginClickEvent = (e) => {
  //   e.preventDefault();
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   firebase.auth().signInWithPopup(provider);
  // };

  render() {
    return (
      <div className="Auth">
        <h1>FISH STORE 06.24.2019:</h1>
        <br />
        <h2>Login:</h2>
        <h1>Auth</h1>
      </div>
    );
  }
}

export default Auth;
