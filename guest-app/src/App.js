import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/users">
          <h1>Users</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
