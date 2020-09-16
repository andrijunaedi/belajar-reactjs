import React, { Component } from 'react';
import Counter from './Counter';
import '../Product.css';

class CardProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 0,
    };
  }

  handleCounterChange = (order) => {
    const { onCounterChange } = this.props;
    onCounterChange(order);
  };

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://www.masakapahariini.com/wp-content/uploads/2019/08/mie-ayam-kecap-620x440.jpg"
            alt="product thumb"
          />
        </div>
        <p className="product-title"> Mie Ayam </p>
        <p className="product-price"> Rp. 10.000 </p>
        <Counter onCounterChange={(value) => this.handleCounterChange(value)} />
      </div>
    );
  }
}

export default CardProduct;
