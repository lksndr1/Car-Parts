import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories'
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/matchers';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      current: [],
      items: [
        {
          id: 1,
          title: 'Leica R3 Electronic',
          img: 'leicaR3el.jpg',
          desc: 'lorem',
          category: 'photo',
          price: '245'
        },
        {
          id: 2,
          title: 'Leica M6',
          img: 'leicaM6.jpg',
          desc: 'lorem',
          category: 'photo',
          price: '367'
        },
        {
          id: 3,
          title: 'Telefunken HiFi',
          img: 'radioTelefunken.jpg',
          desc: 'lorem',
          category: 'radio',
          price: '140'
        },
        {
          id: 4,
          title: 'Rockstar',
          img: 'radioRoadstar.jpg',
          desc: 'lorem',
          category: 'radio',
          price: '300'
        },
        {
          id: 5,
          title: 'Metal plate',
          img: 'metalShell.jpg',
          desc: 'lorem',
          category: 'other',
          price: '27'
        },
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
  return (
    <div className='wrapper'>
      <Header orders={this.state.orders} onDelete = {this.deleteOrder} />
      <Categories chooseCategory = {this.chooseCategory}/>
      <Items items={this.state.currentItems} onAdd = {this.addToOrder}/>
      <Footer /> 
    </div>
  );
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
  })
      if (!isInArray)
        this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
