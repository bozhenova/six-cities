import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../main/main';
import OfferDetails from '../offer-details/offer-details';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/details' component={OfferDetails} />
    </Switch>
  );
};

export default App;
