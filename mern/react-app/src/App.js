import React from 'react';
import LoginPage from './LoginPage'
import UniformAssignPage from './UniformAssignPage'
import ReportsPage from './ReportsPage'
import HelpPage from './components/HelpPage/HelpPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUniformsPage from "./AddUniformsPage";
import ManageUsersPage from "./ManageUsersPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/reports" component={ReportsPage} />
          <Route path="/assign-uniforms" component={UniformAssignPage}/>
          <Route path='/help' component={HelpPage} />
          <Route path="/add-uniforms" component={AddUniformsPage} />
          <Route path="/manage-users" component={ManageUsersPage} />
        </Switch>
      </div>
    </Router>
  );

}

export default App;
