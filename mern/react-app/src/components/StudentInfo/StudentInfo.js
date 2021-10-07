import React from 'react';
import styles from './StudentInfo.module.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

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
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8} align="center" justify="center">
              <TextField
                size="small"
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                bgcolor="red"
                onChange={(e) => props.onFirstNameChange(e.target.value)}/>
            </Grid>
            <Grid item xs={8} align="center" justify="center">
              <TextField
                size="small"
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                onChange={(e) => props.onLastNameChange(e.target.value)}/>
            </Grid>
            <Grid item xs={8} align="center" justify="center">
              <TextField
                type="number"
                size="small"
                id="outlined-basic"
                label="Grade"
                variant="outlined"
                onChange={(e) => props.onGradeChange(e.target.value)}/>
            </Grid>
            <Grid item xs={8} align="center" justify="center">
              <TextField
                size="small"
                id="outlined-basic"
                label="Instrument"
                variant="outlined"
                onChange={(e) => props.onInstrumentChange(e.target.value)}/>
            </Grid>
            <Grid item xs={8} align="center" justify="center">
              <TextField
                size="small"
                id="outlined-basic"
                label="Height"
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="end">in</InputAdornment>,
                }}
                onChange={(e) => props.onHeightChange(e.target.value)}/>
            </Grid>
            <Grid item xs={8} align="center" justify="center">
              <TextField
                size="small"
                id="outlined-basic"
                label="Chest"
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="end">in</InputAdornment>,
                }}
                onChange={(e) => props.onChestChange(e.target.value)}/>
            </Grid>
            <Grid item xs={8} align="center" justify="center">
              <TextField
                size="small"
                id="outlined-basic"
                label="Waist"
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="end">in</InputAdornment>,
                }}
                onChange={(e) => props.onWaistChange(e.target.value)}/>
            </Grid>
            <Grid item xs={8} align="center" justify="center">
              <TextField
                size="small"
                id="outlined-basic"
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