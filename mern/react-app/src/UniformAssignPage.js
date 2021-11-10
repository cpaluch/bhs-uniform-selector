import React, { useState, useEffect } from 'react';
import styles from './UniformAssignPage.module.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { StudentInfo } from './components/StudentInfo/StudentInfo';
import { AdditionalNotes } from './components/AdditionalNotes/AdditionalNotes';
import { StudentSelect } from './components/StudentSelect/StudentSelect';
import UniformList from './components/UniformList/UniformList';
import { PieceSelect } from './components/PieceSelect/PieceSelect';
import Button from '@mui/material/Button';
import axios from 'axios';
const { v4: uuid_v4 } = require('uuid');

export default function UniformAssignPage () {

  // List of all possible piece types
  const allPieces = [
    {
      value: "Hat",
      label: "Hat"
    },
    {
      value: "Jacket",
      label: "Jacket"
    },
    {
      value: "Pants",
      label: "Pants"
    },
    {
      value: "Gauntlet",
      label: "Gauntlet"
    }
  ];

  // List of all possible uniform types
  const allUniformTypes = [
    {
      value: 'marching',
      label: 'Marching',
    },
    {
      value: 'concert_hs',
      label: 'HS Concert'
    },
    {
      value: 'concert_ms',
      label: 'MS Concert'
    },
  ];

  // Student that is selected in select student component
  // Stored as string
  const [selectedStudentID, setSelectedStudentID] = useState("");

  // List of selected uniforms in UniformList component
  // Stored as array of strings
  const [selectedUniformIDs, setSelectedUniformIDs] = useState([]);

  // Student information fields
  const [studentInfo, setStudentInfo] = useState({
    grade: "",
    instrument: "",
    height: "",
    chest: 0,
    waist: "",
    head: "",
  });

  // Additional notes content, as a string
  const [additionalNotes, setAdditionalNotes] = useState("");

  // List of all students, from database
  const [allStudents, setAllStudents] = useState([]);

  // List of all uniforms, from database
  const [allUniforms, setAllUniforms] = useState([]);

  // List of garments that should be displayed in the UniformList component
  const [presentedUniforms, setPresentedUniforms] = useState([]);

  // Selected piece, as a string
  const [selectedPiece, setSelectedPiece] = useState("");

  // Load all the uniforms and students on page load
  useEffect(() => {
    getAllStudents();
    getAllUniforms();
  }, []);

  // Update presented uniforms when allUniforms state changes or when
  // selectedPiece state changes
  useEffect(() => {
    setPresentedUniforms(allUniforms.filter(uniform => {
      return uniform.piece === selectedPiece && uniform.student_id === "";
    }))
  }, [allUniforms, selectedPiece]);

  // Get all the students from the backend
  const getAllStudents = async () => {
    axios.get('http://localhost:3000/students/allStudents').then(res => {
      const students = res.data
      setAllStudents(students)
    });
  }

  // Get all the uniforms from the backend. Set the allUniforms state with only
  // the uniforms that are not assigned
  const getAllUniforms = async () => {
    axios.get("http://localhost:3000/uniforms/allUniforms").then(res => {
      const uniforms = res.data
      setAllUniforms(uniforms)
    });
  }

  /*
  Check if all prerequisites for assigning a uniform have been met.
    (1) A student has been selected.
    (2) At least one uniform has been selected.
  If any of these fail, show an alert with appropriate action needed.
  */
  const checkAssignmentPrerequisites = function () {
    if (selectedStudentID === "") {
      alert("Please select a student.")
      return false;
    } else if (selectedUniformIDs.length === 0) {
      alert("Please select at least one uniform to assign.")
      return false;
    } else {
      return true;
    }
  }

  // Assign uniform(s) to the selected student
  const assign = async () => {
    if (checkAssignmentPrerequisites()) {
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
        .then(function (results) {
          getAllUniforms()
        })
    }
  }

  /*
  Check if all prerequisites for sorting available uniforms have been met.
    (1) A piece has been selected.
    (2) For that piece, the appropriate measurements have been input.
  If any of these fail, show an alert with appropriate action needed.
  */
  const checkSortPrerequisites = function () {
    if (selectedPiece === "") {
      alert("Please select a piece.");
      return false;
    } else if (selectedPiece === "Jacket" && (studentInfo.chest === "")) {
      alert("Please input height and chest measurements.")
      return false;
    } else if (selectedPiece === "Hat" && studentInfo.head === "") {
      alert("Please input head measurement.");
      return false;
    } else if (selectedPiece === "Pants" && studentInfo.waist === "") {
      alert("Please input waist measurement.");
      return false;
    } else {
      return true;
    }
  }

  // Sort the presented uniforms
  const sort = () => {
    if (checkSortPrerequisites()) {
      var sorted = JSON.parse(JSON.stringify(presentedUniforms));
      if (selectedPiece === "Jacket") {
        sorted.sort(function(a, b) {
          return (Math.abs(studentInfo.chest - a.chest) -
                  Math.abs(studentInfo.chest - b.chest));
        })

      } else if (selectedPiece === "Hat") {
          sorted.sort(function(a, b) {
            return (Math.abs(studentInfo.head - a.head) -
                    Math.abs(studentInfo.head - b.head));
          })
      } else if (selectedPiece === "Pants") {
          sorted.sort(function(a, b) {
            return (Math.abs(studentInfo.waist - a.waist) -
                    Math.abs(studentInfo.waist - b.waist));
          })
      } else if (selectedPiece === "Gauntlet") {
        // Do nothing, gauntlets don't have sizes
      }
      setPresentedUniforms(sorted);
    }
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

  const handleSelectedPieceChange = (piece) => {
    setSelectedPiece(piece)
  }

  return (
    <div className={styles.float_container}>
      <Header/>
      <div className={styles.studentSelectComponentWrapper}>
        <StudentSelect
          allStudents={allStudents}
          onSelectedStudentChange={handleSelectedStudentChange}/>
      </div>
      <div className={styles.pieceSelectComponentWraper}>
        <PieceSelect
          allPieces={allPieces}
          onSelectedPieceChange={handleSelectedPieceChange}/>
      </div>
      <div className={styles.uniformListComponentWrapper}>
        <UniformList
          uniforms={presentedUniforms}
          selectedPiece={selectedPiece}
          onSelectedUniformsChange={handleSelectedUniformsChange}/>
      </div>
      <div className={styles.studentInfoComponentWrapper}>
        <StudentInfo
          allUniformTypes={allUniformTypes}
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
        <Button sx={{ml:"auto", mr:"auto"}} variant="contained" onClick={() => {sort()}}>
          Sort by Best Fit
        </Button>
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