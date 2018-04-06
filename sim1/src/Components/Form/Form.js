import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      product: '',
      price: '',
    }
  }

  urlMethod(e) {
    this.setState({
      url: e.target.value
    })
  }

  priceMethod(e) {
    this.setState({
      url: e.target.value
    })
  }
  productMethod(e) {
    this.setState({
      url: e.target.value
    })
  }

  cancel() {
    this.setState({
      url: '',
      product: '',
      price: '',
      
    })
    console.log('THIS', this);
    
  }
  
  render() {
    return (
      <div>
        <input placeholder="URL" type="text" onChange={e => this.urlMethod(e)} />
        <input placeholder="NAME" type="text" onChange={e => this.priceMethod(e)} />
        <input placeholder="PRICE" type="text" onChange={e => this.productMethod(e)} />
        <button onClick={(e) => this.cancel()}>Cancel</button>
        <button>Add To Inventory</button>
      </div>
    )
  }
}
