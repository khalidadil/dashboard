import NotFound from './NotFound.jsx';
import Skel from './Skel.jsx';
import Login from './Login.jsx';
import AdminApp from '/client/components/admin/AdminApp.jsx';
import UserApp from '/client/components/user/UserApp.jsx';
import MainLayout from '/client/components/user/layout/MainLayout.jsx';
import AddChannel from '/client/components/user/AddChannel.jsx';

// First we import some modules...
import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import { render } from 'react-dom';

// const hist = hashHistory.useQueries(ReactRouter.hashHistory.createHistory)();
// console.log(ReactRouter);
// const hist = ReactRouter.browserHistory;

function requireAuth() {
  // if (!Meteor.userId()) {
  //   window.location = '/login';
  // }
}

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/login" component={Login} />
      <Route path="/">
        <Route component={MainLayout}>
          <Route path="myAccount" component={Skel} />
          <Route path="addChannel" component={AddChannel} />
          <Route path="member/:memberId" component={Skel} />
        </Route>
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  , document.getElementById('app'));
});