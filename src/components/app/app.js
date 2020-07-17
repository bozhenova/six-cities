import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Spinner from '../spinner';
import OfferDetails from '../../containers/offer-details';
const Main = lazy(() => import('../../containers/main'));
const SignIn = lazy(() => import('../sign-in'));
const Favorites = lazy(() => import('../../containers/favorites-page'));
// const OfferDetails = lazy(() => import('../../containers/offer-details'));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={SignIn} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/offer/:id' component={OfferDetails} />
        <Redirect from='*' to='/' />
      </Switch>
    </Suspense>
  );
};

export default App;
