import React, { PureComponent } from 'react';
import Counter from './Counter';
import '../Product.css';

class CardProduct extends PureComponent {
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
        <Counter />
      </div>
    );
  }
}

export default CardProduct;
