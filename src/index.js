import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { compose } from 'recompose';

import ErrorBoundary from './components/error-boundary/error-boundary';
import App from './components/app/app';
import configureAPI from './api';
import Operations from './redux/operations';
import rootReducer from './redux/reducer';

const initApp = () => {
  const api = configureAPI((...args) => store.dispatch(...args));
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument(api)),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  store.dispatch(Operations.loadOffers());
  store.dispatch(Operations.loadLoginData());

  ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <App />
        </Router>
      </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
  );
};

initApp();
