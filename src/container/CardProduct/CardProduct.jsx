import React, { PureComponent } from 'react';
import '../Product/Product.css';

class CardProduct extends PureComponent {
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

  handlePlus = () => {
    const { order } = this.state;
    this.setState(
      {
        order: order + 1,
      },
      () => {
        this.handleCounterChange(order + 1);
      },
    );
  };

  handleMinus = () => {
    const { order } = this.state;
    if (order > 0) {
      this.setState(
        {
          order: order - 1,
        },
        () => {
          this.handleCounterChange(order - 1);
        },
      );
    }
  };

  render() {
    const { order } = this.state;
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
        <div className="counter">
          <button type="submit" className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input className="order" type="text" readOnly value={order} />
          <button type="submit" className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
