import React, { Component } from "react";
import AddUniforms from "./components/Settings/AddUniforms";
import ManageUsers from "./components/Settings/ManageUsers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./Settings.module.css";

export class Settings extends Component {
  render() {
    return (
      <div className={styles.float_container}>
        <Header className={styles.headerWrapper} />
        <div className={styles.reportsPageComponentWrapper}>
          <ManageUsers />
        </div>
        <Footer className={styles.footerWrapper} />
      </div>
    );
  }
}

export default Settings;
