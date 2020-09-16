import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
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
    const { order } = this.props;
    console.log(this.props);
    return (
      <div className="counter">
        <button type="submit" className="minus" onClick={this.handleMinus}>
          -
        </button>
        <input className="order" type="text" readOnly value={order} />
        <button type="submit" className="plus" onClick={this.handlePlus}>
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.totalOrder,
});

export default connect(mapStateToProps)(Counter);
