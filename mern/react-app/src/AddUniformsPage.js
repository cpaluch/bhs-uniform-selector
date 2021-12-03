import React from "react";
import AddUniforms from "./components/Settings/AddUniforms";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./AddUniformsPage.module.css";

export default function AddUniformsPage(props) {
  return (
    <div>
      <div className={styles.float_container}>
        <Header
          className={styles.headerWrapper}
          onLogoutAttempt={props.onLogoutAttempt}
        />
        <div className={styles.settingsComponentWrapper}>
          <AddUniforms />
        </div>
      </div>
      <div className={styles.addUniformFooter}>
        <Footer />
      </div>
    </div>
  );
}
