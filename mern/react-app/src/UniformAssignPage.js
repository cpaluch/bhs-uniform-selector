import React, { useState } from 'react';
import styles from './UniformAssignPage.module.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { StudentInfo } from './components/StudentInfo/StudentInfo';
import { AdditionalNotes } from './components/AdditionalNotes/AdditionalNotes';
import { StudentSelect } from './components/StudentSelect/StudentSelect';
import UniformList from './components/UniformList/UniformList';

export default function UniformAssignPage () {

  // Will change how this is stored once back end is incorporated
  const [student, setStudent] = useState("");

  const [studentInfo, setStudentInfo] = useState({
    grade: "",
    instrument: "",
    height: "",
    chest: "",
    waist: "",
    head: "",
  });

  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleStudentChange = (student) => {
    setStudent(student);
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

  const handleAdditionalNotesChange = (notes) => {
    setAdditionalNotes(notes);
  }

  return (
    <div className={styles.float_container}>
      <Header className={styles.headerWrapper}/>
      <div className={styles.studentSelectComponentWrapper}>
        <StudentSelect
          onStudentChange={handleStudentChange}/>
      </div>
      <div className={styles.uniformListComponentWrapper}>
        <UniformList uniforms={{}}></UniformList>
      </div>
      <div className={styles.studentInfoComponentWrapper}>
        <StudentInfo
          onGradeChange={handleGradeChange}
          onInstrumentChange={handleInstrumentChange}
          onHeightChange={handleHeightChange}
          onChestChange={handleChestChange}
          onWaistChange={handleWaistChange}
          onHeadChange={handleHeadChange}/>
      </div>
      <div className={styles.additionalNotesComponentWrapper}>
        <AdditionalNotes
          onAdditionalNotesChange={handleAdditionalNotesChange}/>
      </div>
    </div>
  );

}