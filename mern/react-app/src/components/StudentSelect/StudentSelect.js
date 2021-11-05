import React from 'react';
import styles from './StudentSelect.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export function StudentSelect (props) {

  return (
    <div className={styles.wrapperComponent}>
      <div className={styles.wrapperHeader}>
        <Typography ml={2} mt={1} mb={1} variant="h6" color="white" fontWeight="bold" gutterBottom component="div">
          Select Student
        </Typography>
      </div>
      <div className={styles.wrapperSelectSection}>
        <Box sx={{ flexGrow: 0, ml: 2, mr:2, mb: 2, mt: 2 }}>
          <Grid container columns={12}>
            <Grid item xs={12} align="center" justify="center">
              <Autocomplete
                size="small"
                disablePortal
                id="cb-student-select"
                options={props.allStudents}
                getOptionLabel={option => option.first_name + " " + option.last_name}
                renderInput={
                  (params) => <TextField {...params} label="Select Student"/>
                }
                onChange={(e) => {
                  if (e.target.dataset.optionIndex === undefined) {
                    props.onSelectedStudentChange("");
                  } else {
                    props.onSelectedStudentChange(props.allStudents[e.target.dataset.optionIndex].student_id);
                  }
                }}/>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );

}