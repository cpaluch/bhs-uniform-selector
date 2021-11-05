import React from 'react';
import LoginPage from './LoginPage'
import UniformAssignPage from './UniformAssignPage'
import ReportsPage from './ReportsPage'
import HelpPage from './components/HelpPage/HelpPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUniformsPage from "./AddUniformsPage";
import ManageUsersPage from "./ManageUsersPage";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import styles from './App.module.css';
function App() {
  return (
  <body>
    <Router>
      <div className={styles.header}>
      <Header/>
      </div>
      <div className={styles.float_container}>
       
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/reports" component={ReportsPage} />
          <Route path="/assign-uniforms" component={UniformAssignPage}/>
          <Route path='/help' component={HelpPage} />
          <Route path="/add-uniforms" component={AddUniformsPage} />
          <Route path="/manage-users" component={ManageUsersPage} />
        </Switch>
        
        </div>
        <div className={styles.footer}>
        <Footer/>

        </div>
    </Router>
    </body>
    
    
  );

}

export default App;
