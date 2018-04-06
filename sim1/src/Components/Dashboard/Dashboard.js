import React, { Component } from 'react'
import Product from './Product/Product'

class Dashboard extends Component {


  render() {
    // let list = this.props.inventoryList.map(obj => {
    //   return (<div key={obj.list}>{this.props.inventoryList}</div>
    //   )
    // })
    console.log(this.props.inventoryList)
    return (
      <div>
        <Product inventoryList={this.props.inventoryList}/>
        
      </div>
    )
  }
}
export default Dashboard;
