import React, { useState, useEffect } from 'react';
import ReportsTable from './components/ReportsTable/ReportsTable';
import styles from './ReportsPage.module.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Button } from '@mui/material';
import axios from 'axios';
const { v4: uuid_v4 } = require('uuid');

export default function ReportsPage() {

  // List of selected uniforms in UniformList component
  // Stored as array of strings
  const [selectedUniformIDs, setSelectedUniformIDs] = useState([]);

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

  // first_name: "John",
  // last_name: "Doe",
  // id : "1"
  const getAllStudents = async () => {

    axios.get('http://localhost:3000/students/allStudents').then(res => {
      const students = res.data
      setAllStudents(students)
    });
  }

  // id: uuid_v4(),
  // uniform_id: "Pants 2",
  // student_id: "1",
  // piece: "Pants",
  // type: "MS Concert",
  // height: "",
  // chest: "",
  // waist: "30",
  // head: "",
  // jacket_length: ""
  const getAllUniforms = async () => {

    axios.get("http://localhost:3000/uniforms/allUniforms").then(res => {
      const uniforms = res.data
      setAllUniforms(uniforms)
    });

  }

  // This function goes through the uniforms and matches the uniform id 
  // with the one selected on the table. If it matches then it makes the 
  // lastName and firstName "n/a" and makes the student id "-1"
  function updateUniformData(prop) {
    prop.uniform_id.forEach((uni, j) => {
      allUniforms.forEach((item, i) => {
        if (uni == item.id) {
          // console.log(item.lastName)
          item.last_name = 'N/A'
          item.first_name = 'N/A'
          item.student_id = ''
        }
      });
    });
  }

  // gathers the selected uniforms and always for them to be updated
  const unassign = async () => {
    // POST request here
    console.log(selectedUniformIDs)
    const data = {
      uniform_id: selectedUniformIDs,
      student_id: ""
    }
    // console.log(data.uniform_id)


    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    updateUniformData(data)
    // console.log(data)
    axios.post("http://localhost:3000/uniforms/updateUniforms", data, config)
  }

  // Always for selected uniforms to be handled
  const handleSelectedUniformsChange = (uniform_ids) => {
    setSelectedUniformIDs(uniform_ids);
  }

  // This function will combine the students and uniforms into one data
  // structure so that the x grid data can correctly display the info
  function combine(uniInfo, stdInfo) {
    stdInfo.forEach((data, i) => {
      if (data.id == uniInfo.student_id) {
        uniInfo.first_name = data.first_name
        uniInfo.last_name = data.last_name
        // console.log(uniInfo)
      }
    });
    if (uniInfo.student_id == "") {
      uniInfo.first_name = "N/A"
      uniInfo.last_name = "N/A"
    }
    return uniInfo
  }


  return (
    <div className={styles.float_container}>
      <Header className={styles.headerWrapper} />
      <div className={styles.reportsPageComponentWrapper}>
        <ReportsTable
          combined={allUniforms.map(uni => combine(uni, allStudents))}
          // uniforms={allUniforms}
          // students={allStudents}
          onSelectedUniformsChange={handleSelectedUniformsChange}
        />
        <div className={styles.buttonWrapper}>
          <Button sx={{ ml: "auto", mr: "auto" }} variant="contained" onClick={() => { unassign() }}>
            UnAssign
          </Button>
        </div>
      </div>
      <Footer className={styles.footerWrapper} />
    </div>
  )
}