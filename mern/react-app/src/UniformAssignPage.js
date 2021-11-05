import React, { useState, useEffect } from 'react';
import styles from './UniformAssignPage.module.css';
import { StudentInfo } from './components/StudentInfo/StudentInfo';
import { AdditionalNotes } from './components/AdditionalNotes/AdditionalNotes';
import { StudentSelect } from './components/StudentSelect/StudentSelect';
import UniformList from './components/UniformList/UniformList';
import Button from '@mui/material/Button';

import axios from 'axios';

export default function UniformAssignPage () {

  // Student that is selected in select student component
  // Stored as string
  const [selectedStudentID, setSelectedStudentID] = useState('');

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

  const [sortedUniforms, setSortedUniforms] = useState({
      jacket: [],
      gauntlet: [],
      hat: [],
      pants: []
  })


  // State for the Radio buttons - controls selected uniform type
  const [uniformPiece, setUniformPiece] = useState('jacket');

  useEffect(() => {
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

  
  //sets uniform piece from radio group
  const handleUniformPieceChange = (piece) => {
    setUniformPiece(piece);
  }

  const sort = () => {
    const j = allUniforms.filter((uniform) => (uniform.type === "Jacket"))
    const h = allUniforms.filter((uniform) => (uniform.type === "Hat"))
    const g = allUniforms.filter((uniform) => (uniform.type === "Gauntlet"))
    const p = allUniforms.filter((uniform) => (uniform.type === "Pants"))
    setSortedUniforms({jacket: j, gauntlet: g, hat: h, pants: p})
    // setSortedUniforms({...sortedUniforms, sortedJackets: allUniforms.filter((uniform) => (uniform.type === "Jacket"))})
    // setSortedUniforms({...sortedUniforms, sortedGauntlets: allUniforms.filter((uniform) => (uniform.type === "gauntlet"))})
    // setSortedUniforms({...sortedUniforms, sortedHats: allUniforms.filter((uniform) => (uniform.type === "hat"))})
    // setSortedUniforms({...sortedUniforms, sortedPants: allUniforms.filter((uniform) => (uniform.type === "pants"))})
   console.log(sortedUniforms)
  }

  useEffect(() => {
    console.log(sortedUniforms)
    console.log(allUniforms)
  }, [sortedUniforms.sortedGauntlets]);


  const validation = async () => {
    let valid = true

    //Ensures a uniform type will be selected
    if (studentInfo.grade === "") {
      console.log("error! need uniform type")
      valid = false
    }
    else
    {
      console.log(studentInfo.grade)
    }

    if (studentInfo.chest === '') {
      valid = false
      console.log("error!  need chest")
    }
    else
    {
      console.log(studentInfo.waist)
    }

    if (studentInfo.waist === ''){
      valid = false
      console.log("error! need waist")
    }
    else
    {
      console.log(studentInfo.waist)
    }

    if (studentInfo.height === ''){
      valid = false
      console.log("error!  need height")
    }
    else
    {
      console.log(studentInfo.height)
    }
  
    if (studentInfo.head === '') {
      valid = false
      console.log("error! need head")
    }
    else
    {
      console.log(studentInfo.head)
    }
      
    if (selectedStudentID === '') {
      valid = false
      console.log("error! need student")
    }
    else{
      console.log(selectedStudentID)
    }
    
    if (valid) {
      sort()
    }
  }

  
  return (

    
    <div className={styles.float_container}>
      <div className={styles.form_container}>
        <StudentSelect
          allStudents={allStudents}
          onSelectedStudentChange={handleSelectedStudentChange}/>
        <StudentInfo
          onGradeChange={handleGradeChange}
          onInstrumentChange={handleInstrumentChange}
          onHeightChange={handleHeightChange}
          onChestChange={handleChestChange}
          onWaistChange={handleWaistChange}
          onHeadChange={handleHeadChange}/>
        <AdditionalNotes
          onAdditionalNotesChange={handleAdditionalNotesChange}/>
        <Button sx={{ml:"auto", mr:"auto", mb: "8px"}} variant="contained" onClick={() => { validation()

        }}>
          Sort by Best Fit
        </Button>
      </div>
      <div className={styles.uniform_container}>
      
          <UniformList
              uniforms={sortedUniforms[uniformPiece]}
              uniformPiece={uniformPiece}
              onRadioGroupChange={handleUniformPieceChange}
              onSelectedUniformsChange={handleSelectedUniformsChange}/>

          <Button sx={{ml:"auto", mr:"auto"}} variant="contained" onClick={() => {
              assign()
            }}>
              Assign
            </Button>
      </div>
      
    </div>
  );

}