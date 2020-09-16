import ActionType from './globalActionType';

const globalState = {
  totalOrder: 0,
};

// Reducer
const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case ActionType.PLUS_ORDER:
      return {
        ...state,
        totalOrder: state.totalOrder + 1,
      };
    case ActionType.MINUS_ORDER:
      if (state.totalOrder > 0) {
        return {
          ...state,
          totalOrder: state.totalOrder - 1,
        };
      }
      return state;
    default:
      return state;
  }
};

export default rootReducer;
