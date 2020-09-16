import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Counter extends PureComponent {
  render() {
    const { order, handleMinus, handlePlus } = this.props;
    return (
      <div className="counter">
        <button type="submit" className="minus" onClick={handleMinus}>
          -
        </button>
        <input className="order" type="text" readOnly value={order} />
        <button type="submit" className="plus" onClick={handlePlus}>
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.totalOrder,
});

const mapDispacthToProps = (dispatch) => ({
  handlePlus: () => dispatch({ type: 'PLUS_ORDER' }),
  handleMinus: () => dispatch({ type: 'MINUS_ORDER' }),
});

export default connect(mapStateToProps, mapDispacthToProps)(Counter);
