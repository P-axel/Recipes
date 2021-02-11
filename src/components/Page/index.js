import React from 'react';

import { Route } from 'react-router-dom';

import Recipe from 'src/containers/Recipe';
import Home from 'src/containers/Home';
import Header from './Header';

import './page.scss';

const Page = () => (
  <div className="page">
    <Header />
    <div className="page-content">
      <Route
        path="/"
        exact
      >
        <Home />
      </Route>
      <Route
        path="/recipe/:slug"
      >
        <Recipe />
      </Route>
    </div>
  </div>
);

export default Page;
