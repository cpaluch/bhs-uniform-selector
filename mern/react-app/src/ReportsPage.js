import React from 'react';
import ReportsTable from './components/ReportsTable/ReportsTable';
import styles from './ReportsPage.module.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function ReportsPage(){
    return (
        <div className={styles.float_container}>
          <div className={styles.headerWrapper}>
            <Header/>
          </div>
          <div className={styles.reportsPageComponentWrapper}>
              <ReportsTable/>
          </div>
          <div className={styles.footerWrapper}>
            <Footer/>
          </div>
        </div>
    )
}