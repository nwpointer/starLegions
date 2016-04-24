import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MainPage from './components/MainPage';

export default (
  <Route path="/">
    <IndexRoute component={MainPage} />
  </Route>
);
