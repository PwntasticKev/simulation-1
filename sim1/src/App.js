import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventoryList: [['name', 'price', 'img'], ['name', 'price', 'img']]
    }
  }
  render() {
    return (
      <div className="App">
      <Header/>
      <Dashboard inventoryList={this.state.inventoryList}/>
      <Form/>
      </div>
    );
  }
}

export default App;
