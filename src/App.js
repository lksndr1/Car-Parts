import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }
  render() {
  return (
    <div className='wrapper'>
      <Header />
      <Items items={this.state.items}/>
      <Footer /> 
    </div>
  );
  }
}

export default App;
