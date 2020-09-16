import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Product.css';
import CardProduct from './CardProduct/CardProduct';

class Product extends PureComponent {
  render() {
    const { order } = this.props;
    return (
      <>
        <p>Page Product</p>
        <hr />
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
        <CardProduct />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.totalOrder,
});

export default connect(mapStateToProps)(Product);
