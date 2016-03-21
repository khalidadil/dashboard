import Header from './shared/layouts/Header.jsx';
import LeftSidebar from './shared/layouts/LeftSidebar.jsx';
import RightSidebar from './shared/layouts/RightSidebar.jsx';
import UserApp from './admin/UserApp.jsx';
import AdminApp from './admin/AdminApp.jsx';
import NotFound from './NotFound.jsx';
import Skel from './Skel.jsx';

const { Router, Route, IndexRoute, history } = ReactRouter;
const { render } = ReactDOM;

const hist = history.useQueries(ReactRouter.history.createHistory)();

function requireAuth() {
  if (!Meteor.userId()) {
    // replace({
      // pathname: '/login',
      // state: { nextPathname: nextState.location.pathname },
    // });
    window.location = '/login';
  }
}

Meteor.startup(() => {
  render(
    <Router history={hist}>
      <Route path="/login" component={Login} />
      <Route path="/admin" component={AdminApp} />
      <Route path="/" component={UserApp} onEnter={requireAuth}>
        <Route>
          <IndexRoute/>
          <Route path="myAccount" component={Skel} />
          <Route path="addChannel" component={Skel} />
          <Route path="member/:memberId" component={Skel} />
        </Route>
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  , document.getElementById('app'));
});
