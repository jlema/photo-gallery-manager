const photosReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PHOTOS':
      return { ...state, photos: action.photos };
    case 'UPLOAD_PHOTO':
      return { ...state, isSubmitted: true };
    case 'LOAD_PHOTO_META':
      return { ...state, meta: action.meta };
    default:
      return state;
  }
};

export default photosReducer;
