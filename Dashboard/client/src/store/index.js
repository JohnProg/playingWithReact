import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import loggerMiddleware from 'store/middlewares/logger';
import rootReducers from './modules/rootReducers';

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers =
    process.env.NODE_ENV !== 'production'
      ? compose(
          console.tron.createEnhancer(),
          composeWithDevTools(...enhancers)
        )
      : composeWithDevTools(...enhancers);

  const store = createStore(rootReducers, preloadedState, composedEnhancers);

  return store;
}
