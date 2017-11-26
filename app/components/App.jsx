import React, { Component } from 'react';
import InsertForm from './InsertForm.jsx';
import ItemView from './ItemView.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <InsertForm />
        <ItemView />
      </div>
    );
  }
}
