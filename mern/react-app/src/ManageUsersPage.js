import React, { Component } from "react";
import AddUniforms from "./components/Settings/AddUniforms";
import ManageUsers from "./components/Settings/ManageUsers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./AddUniformsPage.module.css";

export class Settings extends Component {
  render() {
    return (
          <ManageUsers />
    );
  }
}

export default Settings;
