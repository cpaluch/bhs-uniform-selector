import React from 'react';
import styles from '../../ReportsPage.module.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Button from '@mui/material/Button';

export default function HelpPage (props) {
    return (
        <div className={styles.float_container}>
            <Header className={styles.headerWrapper}/>
                <div className={styles.reportsPageComponentWrapper}>
                    <p style={{fontSize: "80px"}}>FAQs</p>
                    <p style={{marginLeft: "20px"}}>Who Are The Band Goons?</p>
                    <p style={{marginLeft: "40px"}}>A team of elite programmers who are all experts in their respective fields.</p>
                    <Button variant="contained" onClick={props.onLogoutAttempt}>
                      Logout
                    </Button>
                </div>
            <Footer className={styles.footerWrapper}/>
        </div>
    )
}
