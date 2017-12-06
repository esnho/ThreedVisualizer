import React, { Component } from 'react';
import Item from './Item.jsx';

export default class ItemView extends Component {

    constructor() {
      super();

      this.state = {
        items: []
      }

      this.displayItems = this.displayItems.bind(this);
      this.updateItems = this.updateItems.bind(this);
    }

    componentDidMount() {

      let firebase = this.props.firebase;

      const itemsRef = this.props.firebase.database().ref('items');
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

    displayItems() {
      let items = [];
      items = this.state.items;

      return(
        items.map((item) => {
          return (
            <Item id={item.id} title={item.title} user={item.user} />
          )
        })
      );
    }

    render() {
      // if never loaded
      // display loading
      // else if there's not item display empty
      // else diplay empty

      return (
        <section className='display-item'>
            <div className="wrapper">
              <ul>
                {this.displayItems()}
              </ul>
            </div>
          </section>
      );
    }

}
