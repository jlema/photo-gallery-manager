const galleriesReducer = (state = [], action) => {
    switch (action.type) {
        case 'LIST_GALLERIES':
            return action.galleries;
        default:
            return state;
    }
};

export default galleriesReducer;
