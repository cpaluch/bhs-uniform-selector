import React, { useState } from 'react';
import styles from './StudentInfo.module.css';

export function StudentInfo () {

  const [studentInfo, setStudentInfo] = useState({
    firstName: "",
    lastName: "",
    grade: "",
    height: "",
    instrument: "",
    chest: "",
    head: "",
    waist: "",
  });

  return (
    <div className={styles.wrapperComponent}>
      <div className={styles.wrapperField}>
        <p className={styles.infoLabel}>First Name</p>
        <input className={styles.infoInput} onChange={(e) => setStudentInfo({...studentInfo, firstName: e.target.value})} type="text" id="fname" name="fname"/>
      </div>
      <div className={styles.wrapperField}>
        <p className={styles.infoLabel}>Last Name</p>
        <input className={styles.infoInput} type="text" id="lname" name="lname"/>
      </div>
      <div className={styles.wrapperField}>
        <p className={styles.infoLabel}>Grade</p>
        <input className={styles.infoInput} type="text" id="grade" name="grade"/>
      </div>
      <div className={styles.wrapperField}>
        <p className={styles.infoLabel}>Instrument</p>
        <input className={styles.infoInput} type="text" id="instrument" name="instrument"/>
      </div>
      <div className={styles.wrapperField}>
        <p className={styles.infoLabel}>Height</p>
        <input className={styles.infoInput} type="text" id="height" name="height"/>
      </div>
      <div className={styles.wrapperField}>
        <p className={styles.infoLabel}>Bust/Chest</p>
        <input className={styles.infoInput} type="text" id="chest" name="chest"/>
      </div>
      <div className={styles.wrapperField}>
        <p className={styles.infoLabel}>Waist</p>
        <input className={styles.infoInput} type="text" id="waist" name="waist"/>
      </div>
      <div className={styles.wrapperField}>
        <p className={styles.infoLabel}>Head</p>
        <input className={styles.infoInput} type="text" id="head" name="head"/>
      </div>
    </div>
  )
}