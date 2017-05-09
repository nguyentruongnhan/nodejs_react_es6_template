import Global from './../global'
import React, { Component } from 'react';
import Layout from './layout'
import Home from './home/main'
import PageNotFound from './404/main'
import {
  Route,
  Switch
} from 'react-router-dom'

const renderHome = () => {
   return <Home config={Global.Config} />
}
export const App = () => (
  <Layout config={Global.Config}>
    <Switch>
      <Route exact path="/" render={renderHome} />
      <Route component={PageNotFound} />
    </Switch>
  </Layout>
);

export default App;
