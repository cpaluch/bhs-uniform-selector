import React, { useState, useEffect } from 'react';
import styles from './UniformAssignPage.module.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { StudentInfo } from './components/StudentInfo/StudentInfo';
import { AdditionalNotes } from './components/AdditionalNotes/AdditionalNotes';
import { StudentSelect } from './components/StudentSelect/StudentSelect';
import UniformList from './components/UniformList/UniformList';

export default function UniformAssignPage () {

  // Student that is selected in select student component
  const [selectedStudent, setSelectedStudent] = useState("");

  // Student information fields
  const [studentInfo, setStudentInfo] = useState({
    grade: "",
    instrument: "",
    height: "",
    chest: "",
    waist: "",
    head: "",
  });

  // Additional notes content, as a string
  const [additionalNotes, setAdditionalNotes] = useState("");

  // List of all students, from database
  const [allStudents, setAllStudents] = useState([]);

  // List of all uniforms, from database
  const [allUniforms, setAllUniforms] = useState([]);

  useEffect(() => {
    // This is where we will make the API call to the DB and load the list of
    // students into the allStudents state and load the list of all uniforms
    // into the allUniforms state. For now, we just use some dummy data. This
    // code will only run once when the page loads.

    async function wrapStudentQuery() {
      // API CALL HERE
      setAllStudents([
        {label: "Noah Hefner"},
        {label: "Cole Paluch"},
        {label: "Jared Anderson"},
        {label: "Ashish Nelli"},
        {label: "Foad Nachabe"}
      ]);
    }

    async function wrapUniformQuery() {
      // API CALL HERE
      setAllUniforms([
        { type: 'Gauntlet', id: '1', size: 'Small'},
        { type: 'Gauntlet', id: '2', size: 'Medium'},
        { type: 'Gauntlet', id: '3', size: 'Large'},
        { type: 'Hat', id: '4', size: 'X-Large'},
        { type: 'Hat', id: '5', size: 'XX-Large'},
        { type: 'Hat', id: '6', size: 'Small'},
        { type: 'Jacket', id: '7', size: 'Medium'},
        { type: 'Jacket', id: '8', size: 'Large'},
        { type: 'Jacket', id: '9', size: 'X-Large'},
        { type: 'Jacket', id: '10', size: 'XX-Large'},
      ]);
    }

    wrapStudentQuery();
    wrapUniformQuery();

  }, []);

  const handleStudentChange = (student) => {
    setSelectedStudent(student);
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
      <Header/>
      <div className={styles.studentSelectComponentWrapper}>
        <StudentSelect
          allStudents={allStudents}
          onStudentChange={handleStudentChange}/>
      </div>
      <div className={styles.uniformListComponentWrapper}>
        <UniformList uniforms={allUniforms}/>
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
      <div className={styles.footerWrapper}>
        <Footer/>
      </div>
    </div>
  );

}