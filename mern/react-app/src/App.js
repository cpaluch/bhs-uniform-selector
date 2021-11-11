import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage'
import UniformAssignPage from './UniformAssignPage'
import ReportsPage from './ReportsPage'
import HelpPage from './components/HelpPage/HelpPage'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AddUniformsPage from "./AddUniformsPage";
import ManageUsersPage from "./ManageUsersPage";
import * as Realm from "realm-web";
import { strict as assert } from 'assert';
const REALM_APP_ID = "bhs-uniform-assign-utshb"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });


function App() {

  const [authenticated, setAuthenticated] = useState(false);

  async function handleAuthenticationAttempt (event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credentials = Realm.Credentials.emailPassword(data.get('email'),
                                                        data.get('password'));
    try {
      // Authenticate the user
      const user = await app.logIn(credentials);
      // `App.currentUser` updates to match the logged in user
      assert(user.id === app.currentUser.id)
      localStorage.setItem("token", user._accessToken)
      setAuthenticated(true)

    } catch(err) {
      alert("Invalid email or password!")
    }
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LoginPage
              onAuthenticationAttempt={handleAuthenticationAttempt}
            />
          </Route>
          <ProtectedRoute path="/reports">
            <ReportsPage/>
          </ProtectedRoute>
          <ProtectedRoute path="/assign-uniforms">
            <UniformAssignPage/>
          </ProtectedRoute>
          <ProtectedRoute path='/help'>
            <HelpPage/>
          </ProtectedRoute>
          <ProtectedRoute path="/add-uniforms">
            <AddUniformsPage/>
          </ProtectedRoute>
          <ProtectedRoute path="/manage-users">
            <ManageUsersPage/>
          </ProtectedRoute>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
