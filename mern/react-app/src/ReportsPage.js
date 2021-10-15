import React from 'react';
import ReportsTable from './components/ReportsTable/ReportsTable';
import styles from './ReportsPage.module.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function ReportsPage(){
    return (
        <div className={styles.float_container}>
            <Header className={styles.headerWrapper}/>
                <div className={styles.reportsPageComponentWrapper}>
                    <ReportsTable/>
                </div>
            <Footer className={styles.footerWrapper}/>
        </div>
    )
} 