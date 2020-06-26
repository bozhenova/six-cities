import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './redux/reducer';
import App from './components/app/app';
import OfferDetails from './components/offer-details/offer-details';
import offers from './mocks/offers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App offers={offers} />
    </BrowserRouter>
  </Provider>,
  document.getElementById(`root`)
);
