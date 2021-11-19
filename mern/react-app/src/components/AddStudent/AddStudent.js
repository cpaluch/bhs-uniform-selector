import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './AddStudent.module.css';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from "@mui/material";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export default function AddStudent(props) {

    
    return (


<Modal
        open={props.onOpen}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.wrapperComponent}>
            <div className={styles.wrapperHeader}>
              <Typography
                ml={2}
                mt={1}
                mb={1}
                variant="h6"
                color="white"
                fontWeight="bold"
                gutterBottom
                component="div"
              >
                Add Student
              </Typography>
            </div>
          <div className={styles.wrapperSelectSection}>
          <Box sx={{ flexGrow: 1, ml: 2, mr: 2, mb: 2, mt: 2 }}>
            <Grid container spacing={2} columns={2}>
              <Grid item xs={12} align="center" justify="center">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} align="center" justify="center">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} align="center" justify="center">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Grade"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} align="center" justify="center">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Instrument"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} align="right" justify="right">
                <Button variant="contained">Add</Button>
              </Grid>
            </Grid>
          </Box>
            </div>
          </div>
        </Box>
      </Modal>
    );
    
}