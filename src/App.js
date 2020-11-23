import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './App.css';
import LandingPage from './containers/LandingPage/landing-page';

const NoMatch = () => (
  <div>
    <h1>404</h1>
    React Page Not Found
  </div>
);

const AppRoutes = ({ store }) => (
  <Switch>
    <Route path="/" component={LandingPage} exact />
    <Route render={NoMatch} />
  </Switch>
)

function App (props) {
  return (
    <Provider store={props.store}>
      {
          <BrowserRouter>
            <AppRoutes/>
          </BrowserRouter>  
      }
    </Provider>
  );
}
export default App;
