import React, { useState } from 'react';
import styles from './UniformAssignPage.module.css';
import { StudentInfo } from './components/StudentInfo/StudentInfo';

export function UniformAssignPage () {

  const [studentInfo, setStudentInfo] = useState({
    firstName: "",
    lastName: "",
    grade: "",
    instrument: "",
    height: "",
    chest: "",
    waist: "",
    head: "",
  });

  const handleFirstNameChange = (fname) => {
    setStudentInfo({...studentInfo, firstName: fname});
  }

  const handleLastNameChange = (lname) => {
    setStudentInfo({...studentInfo, lastName: lname});
  }

  const handleGradeChange = (grade) => {
    setStudentInfo({...studentInfo, grade: grade});
  }

  const handleInstrumentChange = (instrument) => {
    setStudentInfo({...studentInfo, instrument: instrument});
  }

  const handleHeightChange = (height) => {
    setStudentInfo({...studentInfo, height: height});
  }

  const handleChestChange = (chest) => {
    setStudentInfo({...studentInfo, chest: chest});
  }

  const handleWaistChange = (waist) => {
    setStudentInfo({...studentInfo, waist: waist});
  }

  const handleHeadChange = (head) => {
    setStudentInfo({...studentInfo, head: head});
  }

  return (
    <div className={styles.float_container}>
      <div className={styles.studentInfoComponentWrapper}>
        <StudentInfo
          onFirstNameChange={handleFirstNameChange}
          onLastNameChange={handleLastNameChange}
          onGradeChange={handleGradeChange}
          onInstrumentChange={handleInstrumentChange}
          onHeightChange={handleHeightChange}
          onChestChange={handleChestChange}
          onWaistChange={handleWaistChange}
          onHeadChange={handleHeadChange}/>
      </div>
    </div>
  );

}