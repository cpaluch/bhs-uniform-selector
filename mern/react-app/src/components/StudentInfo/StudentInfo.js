import React from 'react';
import styles from './StudentInfo.module.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';

const uniformTypes = [
  {
    value: 'marching',
    label: 'Marching Band',
  },
  {
    value: 'concert_hs',
    label: 'HS Concert Band'
  },
  {
    value: 'concert_ms',
    label: 'MS Concert Band'
  },
];

export function StudentInfo (props) {
  
  return (
    <div className={styles.wrapperComponent}>
      <div className={styles.wrapperHeader}>
        <Typography ml={2} mt={1} mb={1} variant="h6" color="white" fontWeight="bold" gutterBottom component="div">
          Student Information
        </Typography>
      </div>
      <div className={styles.wrapperInputSection}>
        <Box sx={{ flexGrow: 1, ml: 2, mr:2, mb: 2, mt: 2 }}>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={12} align="center" justify="center">
            <Autocomplete
                size="small"
                disablePortal
                id="cb-student-select"
                options={uniformTypes}
                getOptionLabel={option => option.label}
                renderInput={
                  (params) => <TextField {...params} label="Uniform Type"/>
                }
                onChange={(e) => {
                  if (e.target.value === undefined) {
                    props.onGradeChange("");
                  } else {
                    props.onGradeChange(uniformTypes[e.target.value].value);
                  }
                }}/>
            </Grid>
            <Grid item xs={6} align="center" justify="center">
              <TextField
                size="small"
                id="tf-height"
                label="Height"
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="end">in</InputAdornment>,
                }}
                onChange={(e) => props.onHeightChange(e.target.value)}/>
            </Grid>
            <Grid item xs={6} align="center" justify="center">
              <TextField
                size="small"
                id="tf-chest"
                label="Chest"
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="end">in</InputAdornment>,
                }}
                onChange={(e) => props.onChestChange(e.target.value)}/>
            </Grid>
            <Grid item xs={6} align="center" justify="center">
              <TextField
                size="small"
                id="tf-waist"
                label="Waist"
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="end">in</InputAdornment>,
                }}
                onChange={(e) => props.onWaistChange(e.target.value)}/>
            </Grid>
            <Grid item xs={6} align="center" justify="center">
              <TextField
                size="small"
                id="tf-head"
                label="Head"
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="end">in</InputAdornment>,
                }}
                onChange={(e) => props.onHeadChange(e.target.value)}/>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}