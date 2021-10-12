import React from 'react';
import ReportsTable from './components/ReportsTable/ReportsTable';
import styles from './ReportsPage.module.css';

export function ReportsPage(){
    return (
        <div className={styles.float_container}>
            <div className={styles.headerWrapper}/>
                <div className={styles.reportsPageComponentWrapper}>
                    <ReportsTable></ReportsTable>
                </div>
            <div className={styles.footerWrapper}/>
        </div>
    )
} 