import React from 'react';
import styles from './AdditionalNotes.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export function AdditionalNotes (props) {
  return (
    <div className={styles.wrapperComponent}>
      <div className={styles.wrapperHeader}>
        <Typography ml={2} mt={1} mb={1} variant="h6" color="white" fontWeight="bold" gutterBottom component="div">
          Additional Notes
        </Typography>
      </div>
      <div className={styles.wrapperInputSection}>
        <Box
          sx={{ margin: 2 }}>
          <TextField
            size="small"
            id="tf-ad-notes"
            variant="outlined"
            label="Type additional notes here"
            multiline
            rows={6}
            maxrows={6}
            fullWidth={true}
            onChange={(e) => props.onAdditionalNotesChange(e.target.value)}/>
        </Box>
      </div>
    </div>
  );
}