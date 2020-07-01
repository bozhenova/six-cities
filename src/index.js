import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { compose } from 'recompose';

import ErrorBoundary from './components/error-boundary/error-boundary';
import App from './components/app/app';
import { configureApi } from './api';
import Operations from './redux/operations';
import OfferDetails from './components/offer-details/offer-details';

const initApp = () => {
  const api = configureApi((...args) => store.dispatch(...args));
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk.withExtraArgument(api)),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  store.dispatch(Operations.loadOffers());

  ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <Router>
            <App />
          </Router>
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
  );
};

initApp();
