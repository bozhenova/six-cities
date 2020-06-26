import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary/error-boundary';
import App from './components/app/app';
import OfferDetails from './components/offer-details/offer-details';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
  document.getElementById(`root`)
);
