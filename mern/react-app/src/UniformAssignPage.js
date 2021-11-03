import React, { useState, useEffect } from 'react';
import styles from './UniformAssignPage.module.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { StudentInfo } from './components/StudentInfo/StudentInfo';
import { AdditionalNotes } from './components/AdditionalNotes/AdditionalNotes';
import { StudentSelect } from './components/StudentSelect/StudentSelect';
import UniformList from './components/UniformList/UniformList';
import Button from '@mui/material/Button';

import axios from 'axios';
const { v4: uuid_v4 } = require('uuid');


export default function UniformAssignPage () {

  // Student that is selected in select student component
  // Stored as string
  const [selectedStudentID, setSelectedStudentID] = useState({});

  // List of selected uniforms in UniformList component
  // Stored as array of strings
  const [selectedUniformIDs, setSelectedUniformIDs] = useState([]);

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
    getAllStudents();
    getAllUniforms();
  }, []);

  const getAllStudents = async () => {

    // API CALL HERE
    axios.get('http://localhost:3000/students/allStudents').then(res => {
      const students = res.data
      setAllStudents(students)
    })
  }

  const getAllUniforms = async () => {

    axios.get("http://localhost:3000/uniforms/allUniforms").then(res => {
      const uniforms = res.data
      console.log(uniforms)
      setAllUniforms(uniforms)
    })
    
  }


  const assign = async () => {
    // POST request here

    const data = {
      uniform_id: selectedUniformIDs,
      student_id: selectedStudentID
    }

    const config = {
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    axios.post("http://localhost:3000/uniforms/updateUniforms", data, config)
  }

  const handleSelectedUniformsChange = (uniform_ids) => {
    setSelectedUniformIDs(uniform_ids);
  }

  const handleSelectedStudentChange = (student_id) => {
    setSelectedStudentID(student_id);
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
          onSelectedStudentChange={handleSelectedStudentChange}/>
      </div>
      <div className={styles.uniformListComponentWrapper}>
        <UniformList
          uniforms={allUniforms}
          onSelectedUniformsChange={handleSelectedUniformsChange}/>
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
      <div className={styles.buttonsWrapper}>
        <Button sx={{ml:"auto", mr:"auto"}} variant="contained">
          Sort by Best Fit
        </Button>
        
      </div>
      <div>
      <Button sx={{ml:"auto", mr:"auto"}} variant="contained" onClick={() => {
          assign()
        }}>
          Assign
        </Button>
      </div>
      <div className={styles.footerWrapper}>
        <Footer/>
      </div>
    </div>
  );

}