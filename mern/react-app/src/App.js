import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage'
import UniformAssignPage from './UniformAssignPage'
import ReportsPage from './ReportsPage'
import HelpPage from './components/HelpPage/HelpPage'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AddUniformsPage from "./AddUniformsPage";
import ManageUsersPage from "./ManageUsersPage";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { strict as assert } from 'assert';
import { useHistory } from "react-router-dom";

export default function App () {

  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (currentUser != {} && authenticated) {
      history.push("/assign-uniforms");
      console.log("yes")
    } else {
      console.log("NO")
    }
  }, [currentUser, authenticated]);

  async function handleAuthenticationAttempt (event) {
    event.preventDefault();
    // Extract email and password from the input fields
    const formData = new FormData(event.currentTarget);
    const data = {
      email : formData.get('email'),
      password : formData.get('password'),
    };
    // Login and save JWT
    const config = {
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    axios
      .post("http://localhost:5000/user/login", data, config)
      .then(res => {
        // Store JWT in local storage
        console.log(res)
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token as Authorization header for axios requests
        axios.defaults.headers.common["Authorization"] = token;
        // Store current user in currentUser state
        const decoded = jwt_decode(token);
        setCurrentUser(decoded);
        setAuthenticated(true);
      })
      .catch(
        err => console.log(err)
      );
  }

  async function handleLogoutAttempt (event) {
    event.preventDefault();
    // Remove JWT from local storage
    localStorage.removeItem("jwtToken");
    // Remove Authorization header from axios requests
    delete axios.defaults.headers.common["Authorization"];
    // Remove current user from currentUser state
    setCurrentUser({});
    setAuthenticated(false);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LoginPage
            currentUser={currentUser}
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