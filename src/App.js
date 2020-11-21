import React from 'react';
import { Provider } from 'react-redux';
import Page from './components/Page';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import { addTodo } from './actions';

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
    {/* <Route path="/page" component={Page} exact /> */}
    <Route path="/page" component={Page} render={() => {
      if (store) {
        // Bad & ugly just to change the store server side through actions before rendering
        store.dispatch(addTodo('This should come renderer from server (on /Page direct hit)'));  
      }
      
      return <Page />; 
    }}
     exact />
     {/* <Route exact path="/s" component={Home}/> */}
    <Route render={NoMatch} />
  </Switch>
)

function App (props) {
  return (
    <Provider store={props.store}>
      {
        props.location
        ? (
          <StaticRouter location={props.location} context={{}}>
            <AppRoutes store={props.store}/>
          </StaticRouter>
        ) : (
          <BrowserRouter>
            <AppRoutes/>
          </BrowserRouter>  
        )
      }
    </Provider>
  );
}
export default App;
