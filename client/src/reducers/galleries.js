const galleriesReducer = (state = [], action) => {
    switch (action.type) {
        case 'LIST_GALLERIES':
            return { ...state, galleries: action.galleries };
        default:
            return state;
    }
};

export default galleriesReducer;
