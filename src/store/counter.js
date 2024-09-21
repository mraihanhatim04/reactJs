const DEFAULT_STATE = {
  name: "GLOBAL COUNT",
  count: 0,
};

export const counterReducer = (state = DEFAULT_STATE, action) => {
  if (action.type === "INCREMENT") {
    const duplicateState = {
      ...state,
    };
    duplicateState.count = state.count + 1;

    return duplicateState;
  } else if (action.type === "DECREMENT") {
    const duplicateState = {
      ...state,
    };
    duplicateState.count = state.count - 1;

    return duplicateState;
  } else if (action.type === "RESET") {
    const duplicateState = {
      ...state,
    };
    duplicateState.count = state.count = 0;

    return duplicateState;
  } else if (action.type === "SET") {
    const duplicateState = {
      ...state,
    };
    duplicateState.count = action.counterValue;

    return duplicateState;
  } else {
    return state;
  }
};
