import React, { Component } from 'react'
import styles from './AddUniforms.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export class AddUniforms extends Component {
    render() {
        return (
            <div className={styles.wrapperComponent}>
            <div className={styles.wrapperHeader}>
              <Typography ml={2} mt={1} mb={1} variant="h6" color="white" fontWeight="bold" gutterBottom component="div">
                Add Uniform
              </Typography>
            </div>
            <div className={styles.wrapperSelectSection}>
              <Box sx={{ flexGrow: 1, ml: 2, mr:2, mb: 2, mt: 2 }}>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={12} align="center" justify="center">
                    {/* <Autocomplete
                      size="small"
                      disablePortal
                      id="cb-student-select"
                      options={testStudentData}
                      renderInput={(params) => <TextField {...params} label="Select Student" />}
                      isOptionEqualToValue={(option, value) => option.id === value.id}
                      onChange={(e) => props.onStudentChange(e.target.innerText)}/> */}
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
        )
    }
}

export default AddUniforms
