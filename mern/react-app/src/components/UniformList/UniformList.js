import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import styles from './UniformList.module.css';
import Typography from '@mui/material/Typography';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

export default function UniformList(props) {

  const columns = [
    { field: 'type', headerName: 'Type of Uniform', width: 220 },
    { field: 'id', headerName: 'Uniform ID', width: 150 },
    { field: 'size', headerName: 'Size', width: 150 },
  ];

  return (
    <div className={styles.wrapperComponent}>
      <Box sx={{ml: 10, mt: "10px", mb: 4, mr: 10, backgroundColor: "blue", borderRadius: '15px'}}>
          <FormControl sx={{display: "flex"}} component="fieldset">
            <RadioGroup 
              row 
              aria-label="uniform-type" 
              name="row-radio-buttons-group"
              sx={{justifyContent: "space-around"}} 
              value={props.uniformPiece}
              onChange={(e) => props.onRadioGroupChange(e.target.value)}
            >
              <FormControlLabel 
                value="jacket" 
                control={
                  <Radio sx={{color: "white", '&.Mui-checked': {color: "white"}}}/>
                } 
                label="Jacket" 
                sx={{color: "white"}}
              />
              <FormControlLabel 
                value="gauntlet" 
                control={
                  <Radio sx={{color: "white", '&.Mui-checked': {color: "white"}}}/>
                } 
                label="Gauntlet" 
                sx={{color: "white"}}
              />
              <FormControlLabel 
                value="hat" 
                control={
                  <Radio sx={{color: "white", '&.Mui-checked': {color: "white"}}}/>
                } 
                label="Hat" 
                sx={{color: "white"}}
              />
              <FormControlLabel 
                value="pants" 
                control={
                  <Radio sx={{color: "white", '&.Mui-checked': {color: "white"}}}/>
                } 
                label="Pants" 
                sx={{color: "white"}}
              />
              {/* <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="other"
                sx={{color: "white"}}
              /> */}
            </RadioGroup>
          </FormControl>
        </Box>

      <div className={styles.wrapperHeader}>
        <Typography ml={1} pl={1} mt={2} mb={2} variant="h6" color="white" fontWeight="bold" gutterBottom component="div">
            Uniforms
        </Typography>

        
        { // Creates a radio group within the header

        /* <Box sx={{ml: "auto", mt: "auto", mb: "auto", mr: '8px', backgroundColor: "#f0f0f0", borderRadius: '15px'}}>
          <FormControl sx={{pl: '5px'}} component="fieldset">
            <RadioGroup 
              row 
              aria-label="uniform-type" 
              name="row-radio-buttons-group"
              //value={value}
              //onChange={handleChange}
            >
              <FormControlLabel value="jacket" control={<Radio size="small"/>}  label="Jacket" />
              <FormControlLabel value="gauntlet" control={<Radio size="small"/>} label="Gauntlet" />
              <FormControlLabel value="hat" control={<Radio size="small"/>} label="Hat" />
              <FormControlLabel value="pants" control={<Radio size="small"/>} label="Pants" />
              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="other"
              />
            </RadioGroup>
          </FormControl>
        </Box> */}
      </div>
      <div className={styles.boxLimits}>
        <DataGrid
          rows={props.uniforms}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
          onSelectionModelChange={(newSelection) => {
            props.onSelectedUniformsChange(newSelection);
          }}
        />
      </div>
    </div>
  );

}
