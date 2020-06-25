import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import photosReducer from '../reducers/photos';
import galleriesReducer from '../reducers/galleries';
import errorsReducer from '../reducers/errors';
import { Auth } from '../reducers/auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    photos: photosReducer,
    galleries: galleriesReducer,
    errors: errorsReducer,
    auth: Auth
  }),
  applyMiddleware(thunk, logger)
  // composeEnhancers(applyMiddleware(thunk, logger))
);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
