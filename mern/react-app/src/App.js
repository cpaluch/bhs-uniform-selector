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
import { useHistory } from "react-router-dom";

const REALM_APP_ID = "bhs-uniform-assign-utshb"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });

export default function App () {

  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  console.log(history)

  useEffect(() => {
    if (authenticated) {
      history.push("/assign-uniforms");
    } else {
      history.push("/");
    }
  }, [authenticated]);

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
      console.log(err)
      alert("Invalid email or password!")
    }
  }

  async function handleLogoutAttempt (event) {
    try {
      // Authenticate the user
      const user = await app.currentUser.logOut();
      localStorage.removeItem("token")
      setAuthenticated(false)
      history.push("/");
    } catch(err) {
      console.log(err)
      alert("Logout failed!")
    }
  }

  return (
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
          <HelpPage
            onLogoutAttempt={handleLogoutAttempt}
          />
        </ProtectedRoute>
        <ProtectedRoute path="/add-uniforms">
          <AddUniformsPage/>
        </ProtectedRoute>
        <ProtectedRoute path="/manage-users">
          <ManageUsersPage/>
        </ProtectedRoute>
      </Switch>
    </div>
  );

}