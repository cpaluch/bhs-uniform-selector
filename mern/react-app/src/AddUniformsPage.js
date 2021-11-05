import React, { Component } from "react";
import AddUniforms from "./components/Settings/AddUniforms";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./AddUniformsPage.module.css";

export class Settings extends Component {
  render() {
    return (
        <div className={styles.settingsComponentWrapper}>
          <AddUniforms />
        </div>

    );
  }
}

export default Settings;
