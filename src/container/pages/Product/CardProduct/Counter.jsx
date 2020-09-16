import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../../../redux/reducer/globalActionType';

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
  handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
  handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
});

export default connect(mapStateToProps, mapDispacthToProps)(Counter);
