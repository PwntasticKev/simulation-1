import React, { Component } from 'react'
import Product from './Product/Product'

class Dashboard extends Component {


  render() {
    this.props.inventoryList.map(obj => {
      return <div key={obj.list}>{this.props.inventoryList}</div>
    })
    return (
      <div>
        <Product/>
        {this.props.inventoryList}
      </div>
    )
  }
}
export default Dashboard;
