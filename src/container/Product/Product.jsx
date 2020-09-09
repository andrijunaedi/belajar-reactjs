import React, { PureComponent } from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';

class Product extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      order: 0,
    };
  }

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    const { order } = this.state;
    return (
      <>
        <div className="header">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
              alt="logo"
            />
          </div>
          <div className="trolley">
            <img
              src="https://image.flaticon.com/icons/png/512/263/263142.png"
              alt="trolley"
            />
            <div className="count">{order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(value) => this.handleCounterChange(value)}
        />
      </>
    );
  }
}

export default Product;
