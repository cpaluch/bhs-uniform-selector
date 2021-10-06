import React from 'react';
import styles from './App.module.css';
import { StudentInfo } from './components/StudentInfo/StudentInfo';

function App() {
  return (
    <div className={styles.float_container}>
      <div className={styles.studentInfoTestDiv}>
        <StudentInfo/>
      </div>
    </div>
  )
}

export default App;
