import React, { Component } from 'react';
import firebase from './../FirebaseUtils/FirebaseInitializer.jsx';
import Item from './Item.jsx';

export default class ItemView extends Component {

    constructor() {
      super();
      this.state = {
        items: []
      }

      this.updateItems = this.updateItems.bind(this);
    }

    componentDidMount() {
      const itemsRef = firebase.database().ref('items');
      itemsRef.on('value', this.updateItems);
    }

    /*componentWillUnmount() {
      const itemsRef = firebase.database().ref('items');
      itemsRef.off('value', this.updateItems);
    }*/

    updateItems(snapshot) {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    }

    render() {
      return (
        <section className='display-item'>
            <div className="wrapper">
              <ul>
                {this.state.items.map((item) => {
                  return (
                    <Item id={item.id} title={item.title} user={item.user} />
                  )
                })}
              </ul>
            </div>
          </section>
      );
    }

}
