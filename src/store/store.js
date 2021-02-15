import { applyMiddleware, compose, createStore } from 'redux';
//Remove '/developmentOnly' from the end only if you want devtool on production also.
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [thunk];

//Simple redux configuration.
// const store = createStore(rootReducer);

//Redux configuration with middlewares.
// const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

//Redux configuration with redux-devtool-extension
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
