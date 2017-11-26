import React, { Component } from 'react';
import firebase from './../FirebaseUtils/FirebaseInitializer.jsx';

export default class ItemActions extends Component {

  constructor() {
    super();
    this.state = {
      removeConfirm: false
    }

    this.removeProcess = this.removeProcess.bind(this);
  }

  removeProcess(setActive) {
    this.setState({
      removeConfirm: setActive
    });
  }

  removeItem() {
    const itemRef = firebase.database().ref(`/items/${this.props.id}`);
    itemRef.remove();

    this.removeProcess(false);
  }

  render() {
      if (this.state.removeConfirm) {
        return (
          <div>
            <h3>Are you sure you want to remove this item?</h3>
            <button onClick={() => this.removeItem()}>Yes</button>
            <button onClick={() => this.removeProcess(false)}>Cancel</button>
          </div>
        );
      } else {
        return (
          <li key={this.props.id}>
            <h3>{this.props.title}</h3>
            <p>brought by: {this.props.user}</p>
            <button onClick={() => this.removeProcess(true)}>Remove Item</button>
          </li>
        );
      }
  }

}
