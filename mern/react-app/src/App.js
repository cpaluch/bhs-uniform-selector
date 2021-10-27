import React from 'react';
import LoginPage from './components/LoginPage/LoginPage'
import UniformAssignPage from './UniformAssignPage'
import ReportsPage from './ReportsPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from './Settings';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/reports" component={ReportsPage} />
          <Route path="/assign-uniforms" component={UniformAssignPage}/>
          <Route path="/add-uniforms" component={Settings}/>
        </Switch>
      </div>
    </Router>
  );
  
}

export default App;