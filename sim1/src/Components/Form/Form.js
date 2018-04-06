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
    this.setSate = ({
      url: e.target.value
    })
  }

  priceMethod(e) {
    this.setSate = ({
      url: e.target.value
    })
  }
  productMethod(e) {
    this.setSate = ({
      url: e.target.value
    })
  }

  cancel() {
    console.log('working?');
    this.setState({
      url: '',
      product: '',
      price: '',
    })
  }
  
  render() {
    return (
      <div>
        <input placeholder="URL" type="text" onChange={e => this.urlMethod(e)} />
        <input placeholder="NAME" type="text" onChange={e => this.priceMethod(e)} />
        <input placeholder="PRICE" type="text" onChange={e => this.productMethod(e)} />
        <button onClick={e => this.cancel()}>Cancel</button>
        <button>Add To Inventory</button>
      </div>
    )
  }
}
