import React, { useState, useEffect } from "react";
import ReportsTable from "./components/ReportsTable/ReportsTable";
import styles from "./ReportsPage.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Button } from "@mui/material";
import axios from "axios";

export default function ReportsPage(props) {
  // List of selected uniforms in UniformList component
  // Stored as array of strings
  const [selectedUniformIDs, setSelectedUniformIDs] = useState([]);

  // List of all students, from database
  const [allStudents, setAllStudents] = useState([]);

  // List of all uniforms, from database
  const [allUniforms, setAllUniforms] = useState([]);

  // Combine uniform and student lists to make the rows that are sent to
  // ReportsTable component as a prop
  const [reportsTableRows, setReportsTableRows] = useState([]);

  // Updates ReportsTable rows every time allUniforms or allStudents changes
  useEffect(() => {
    // Copy uniform array
    var rows = JSON.parse(JSON.stringify(allUniforms));
    // Insert first and last name into each row or N/A if unassigned
    rows.forEach((uniform) => {
      if (uniform.student_id === "") {
        uniform.f_name = "N/A";
        uniform.l_name = "N/A";
      } else {
        uniform.f_name = allStudents.find(
          (elem) => elem._id === uniform.student_id
        ).f_name;
        uniform.l_name = allStudents.find(
          (elem) => elem._id === uniform.student_id
        ).l_name;
      }
    });
    // Update state for ReportsTable component
    setReportsTableRows(rows);
  }, [allUniforms, allStudents]);

  // Fetch all students and uniforms from MongoDB on page load
  useEffect(() => {
    getAllStudents();
    getAllUniforms();
  }, []);

  const getAllStudents = async () => {
    axios.get("http://localhost:5000/student").then((res) => {
      const students = res.data;
      setAllStudents(students);
    });
  };

  const getAllUniforms = async () => {
    axios.get("http://localhost:5000/uniform").then((res) => {
      const uniforms = res.data;
      setAllUniforms(uniforms);
    });
  };

  // Unassign uniforms from students and run GET request for all uniforms
  const unassign = async () => {
    const data = {
      uniform_ids: selectedUniformIDs,
    };
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    axios
      .post("http://localhost:5000/uniform/unassign", data, config)
      .then((res) => {
        getAllUniforms();
      });
  };

  const handleSelectedUniformsChange = (uniform_ids) => {
    setSelectedUniformIDs(uniform_ids);
  };

  return (
    <div className={styles.float_container}>
      <Header
        className={styles.headerWrapper}
        onLogoutAttempt={props.onLogoutAttempt}
      />
      <div className={styles.reportsPageComponentWrapper}>
        <ReportsTable
          rows={reportsTableRows}
          onSelectedUniformsChange={handleSelectedUniformsChange}
        />
        <div className={styles.buttonWrapper}>
          <Button
            sx={{ ml: "auto", mr: "auto" }}
            variant="contained"
            onClick={() => {
              unassign();
            }}
          >
            UNASSIGN
          </Button>
        </div>
      </div>
      <Footer className={styles.footerWrapper} />
    </div>
  );
}
