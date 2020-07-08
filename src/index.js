import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { compose } from 'recompose';

import App from './components/app';
import configureAPI from './services/api';
import rootReducer from './redux/reducer';
import ErrorBoundary from './components/error-boundary';
import { Operations as UserOperations } from './redux/reducer/user/actions';
import { Operations as DataOperations } from './redux/reducer/data/actions';

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

  store.dispatch(DataOperations.loadOffers());
  store.dispatch(UserOperations.loadLoginData());

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
