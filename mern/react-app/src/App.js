import React from 'react';
import LoginPage from './LoginPage'
import UniformAssignPage from './UniformAssignPage'
import ReportsPage from './ReportsPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/reports" component={ReportsPage} />
          <Route path="/assign-uniforms" component={UniformAssignPage}/>
        </Switch>
      </div>
    </Router>
  );

}

export default App;