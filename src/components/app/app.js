import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Spinner from '../spinner';
const OfferDetails = lazy(() => import('../../containers/offer-details'));
const Main = lazy(() => import('../../containers/main-page'));
const SignIn = lazy(() => import('../sign-in'));
const Favorites = lazy(() => import('../../containers/favorites-page'));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/login' component={SignIn} />
        <Route exact path='/favorites' component={Favorites} />
        <Route exact path='/offer/:id' component={OfferDetails} />
        <Redirect from='*' to='/' />
      </Switch>
    </Suspense>
  );
};

export default App;
