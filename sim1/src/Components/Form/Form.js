import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      price: '',
      product: '',
    }
  }
  
  cancel(e) {
    this.setState({
      url: e.target.value = '',
      product: e.target.value = '',
      price: e.target.value = '',
      
    }, console.log('THIS', this))
  }
  urlMethod(e) {
    this.setState({
      url: e.target.value
    })
    console.log(e.target.value)
  }
  
  priceMethod(e) {
    this.setState({
      price: e.target.value
    })
  }
  productMethod(e) {
    this.setState({
      product: e.target.value
    })
  }

  
  render() {
    return (
      <div>
        <input placeholder="URL" type="text" onChange={e => this.urlMethod(e)} />
        <input placeholder="NAME" type="text" onChange={e => this.priceMethod(e)} />
        <input placeholder="PRICE" type="text" onChange={e => this.productMethod(e)} />
        <button onClick={(e) => this.cancel(e)}>Cancel</button>
        <button>Add To Inventory</button>
      </div>
    )
  }
}
