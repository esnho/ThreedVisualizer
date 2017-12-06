import React, { Component } from 'react';
import InsertForm from './components/InsertForm.jsx';
import ItemView from './components/ItemView.jsx';
import firebase, { auth, provider } from './FirebaseUtils/FirebaseInitializer.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
    });
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.forceUpdate();
      });
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        // CHECK THE DATABASE FOR USER EXISTANCE
        //
        // IN CASE THE USER DOES NOT EXISTS CREATE DATABASE USER FIELD WITH NO PERMISSION
        //

        this.forceUpdate();
      });
  }

  checkUserPermission() {
    if (!auth.currentUser) {
      return false;
    }

    return true;
  }

  //TODO RICHIAMARE LE FUNZIONI DAI MODULI FIGLI
  showAlert() {
    // SHOW ALERT MESSAGE
    // HIDE MESSAGE AFTER TIMEOUT
  }

  showError() {
    // SHOW ERROR MESSAGE
  }

  render() {
    console.log(firebase);

    let user = auth.currentUser;

    return (
      <div>
          {this.checkUserPermission() ?
            <div>
              <div className='user-profile'>
                <img src={user.photoURL} alt={user.displayName || user.email}/>
              </div>

              <button onClick={this.logout}>Log Out</button>

              <InsertForm firebase={firebase} />
              <ItemView  firebase={firebase}/>
            </div>
            :
            <button onClick={this.login}>Log In</button>
          }
      </div>
    );
  }
}
