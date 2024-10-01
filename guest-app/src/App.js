import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Users from './user/pages/Users';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/guests">
          <h1>Guests</h1>
        </Route>
        <Route path="/meetings">
          <h1>Meetings</h1>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
