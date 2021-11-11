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

  const getAllStudents = async () => {

    axios.get('http://localhost:3000/students/allStudents').then(res => {
      const students = res.data
      setAllStudents(students)
    });

    // setAllStudents([
    //   {
    //     first_name: "Noah",
    //     last_name: "Hefner",
    //     id: uuid_v4()
    //   },
    //   {
    //     first_name: "Cole",
    //     last_name: "Paluch",
    //     id: uuid_v4()
    //   },
    //   {
    //     first_name: "Jared",
    //     last_name: "Anderson",
    //     id: uuid_v4()
    //   },
    //   {
    //     first_name: "Ashish",
    //     last_name: "Nelli",
    //     id: uuid_v4()
    //   },
    //   {
    //     first_name: "Foad",
    //     last_name: "Nachabe",
    //     id: uuid_v4()
    //   }
    // ]);

  }

  const getAllUniforms = async () => {

    axios.get("http://localhost:3000/uniforms/allUniforms").then(res => {
      const uniforms = res.data
      setAllUniforms(uniforms)
    });

    // setAllUniforms([
    //   { type: 'Marching Band', piece: 'Hat', id: 'Hat 1', size: 'S', lastName: 'Nachabe', firstName: 'Foad', stdID: 1 },
    //   { type: 'Marching Band', piece: 'Jumpsuit', id: 'Jumpsuit 2', size: 'M', lastName: 'Nelli', firstName: 'Ashish', stdID: 2 },
    //   { type: 'Marching Band', piece: 'Jacket', id: 'Jacket 3', size: 'L', lastName: 'N/A', firstName: 'N/A', stdID: -1 },
    //   { type: 'Marching Band', piece: 'Poncho', id: 'Poncho 4', size: 'XL', lastName: 'N/A', firstName: 'N/A', stdID: -1 },
    //   { type: 'HS Concert Band', piece: 'Dress', id: 'Dress 5', size: 'XXL', lastName: 'Hefner', firstName: 'Noah', stdID: 3 },
    //   { type: 'HS Concert Band', piece: 'Shirt', id: 'Shirt 6', size: 'S', lastName: 'Nachabe', firstName: 'Foad', stdID: 1 },
    //   { type: 'HS Concert Band', piece: 'Jacket', id: 'Jacket 7', size: 'M', lastName: 'Nelli', firstName: 'Ashish', stdID: 2 },
    //   { type: 'HS Concert Band', piece: 'Pants', id: 'Pants 8', size: 'L', lastName: 'Anderson', firstName: 'Jared', stdID: 4 },
    //   { type: 'MS Concert Band', piece: 'Dress', id: 'Dress 9', size: 'XL', lastName: 'Paluch', firstName: 'Cole', stdID: 5 },
    //   { type: 'MS Concert Band', piece: 'Shirt', id: 'Shirt 10', size: 'XXL', lastName: 'Hefner', firstName: 'Noah', stdID: 3 },
    //   { type: 'MS Concert Band', piece: 'Jacket', id: 'Jacket 11', size: 'L', lastName: 'Anderson', firstName: 'Jared', stdID: 4 },
    //   { type: 'MS Concert Band', piece: 'Pants', id: 'Pants 12', size: 'XL', lastName: 'Paluch', firstName: 'Cole', stdID: 5 },
    // ]);
  }

  // This function goes through the uniforms and matches the uniform id 
  // with the one selected on the table. If it matches then it makes the 
  // lastName and firstName "n/a" and makes the student id "-1"
  function updateUniformData(prop) {
    prop.uniform_id.forEach((uni, j) => {
      allUniforms.forEach((item, i) => {
        if (uni == item.id) {
          // console.log(item.lastName)
          item.lastName = 'N/A'
          item.firstName = 'N/A'
          item.stdID = '-1'
        }
      });
    });
  }

  const unassign = async () => {
    // POST request here

    const data = {
      uniform_id: selectedUniformIDs
      // student_id: selectedStudentID
    }
    // console.log(data.uniform_id)


    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    updateUniformData(data)
    // axios.post("http://localhost:3000/uniforms/updateUniforms", data, config)
  }

  const handleSelectedUniformsChange = (uniform_ids) => {
    setSelectedUniformIDs(uniform_ids);
  }


  return (
    <div className={styles.float_container}>
      <Header className={styles.headerWrapper} />
      <div className={styles.reportsPageComponentWrapper}>
        <ReportsTable
          uniforms={allUniforms}
          students={allStudents}
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