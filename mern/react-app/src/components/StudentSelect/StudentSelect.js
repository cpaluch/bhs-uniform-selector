import React from 'react';
import styles from './StudentSelect.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddStudent from '../AddStudent/AddStudent';

export function StudentSelect (props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.wrapperComponent}>
      <div className={styles.wrapperHeader}>
        <Typography ml={2} mt={1} mb={1} variant="h6" color="white" fontWeight="bold" gutterBottom component="div">
          Select Student
        </Typography>
      </div>
      <div className={styles.wrapperSelectSection}>
        <Box sx={{ flexGrow: 1, ml: 2, mr:2, mb: 2, mt: 2 }}>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={12} align="center" justify="center">
              <Autocomplete
                size="small"
                disablePortal
                id="cb-student-select"
                options={props.allStudents}
                getOptionLabel={option => option.f_name + " " + option.l_name}
                renderInput={
                  (params) => <TextField {...params} label="Select Student"/>
                }
                onChange={(e) => {
                  if (e.target.dataset.optionIndex === undefined) {
                    props.onSelectedStudentChange("");
                  } else {
                    props.onSelectedStudentChange(props.allStudents[e.target.dataset.optionIndex]._id);
                  }
                }}/>
            </Grid>
            <AddStudent
              onOpen={open}
              handleClose={handleClose}/>
            <Button onClick={handleOpen}>Open modal</Button>
          </Grid>
        </Box>
      </div>
    </div>
  );

}