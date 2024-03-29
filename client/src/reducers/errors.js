const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ERRORS':
      return { ...state, errors: action.errors };
    default:
      return state;
  }
};

export default errorsReducer;
