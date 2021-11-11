import React, { useState } from "react";
import styles from "./AddUniforms.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";

export default function AddUniforms() {
  const [selectVal, setSelectedVal] = useState("");

  const handleChange = (e) => setSelectedVal(e.target.value);

  let select;

  if (selectVal === "10") {
    select = (
      <FormControl fullWidth>
        <InputLabel>Uniform Piece</InputLabel>
        <Select label="add uniform">
          <MenuItem value={10}>Hat</MenuItem>
          <MenuItem value={20}>JumpSuit</MenuItem>
          <MenuItem value={30}>Jacket</MenuItem>
          <MenuItem value={40}>Poncho</MenuItem>
        </Select>
      </FormControl>
    );
  } else if (selectVal === "20" || selectVal === "30") {
    select = (
      <FormControl fullWidth>
        <InputLabel>Uniform Piece</InputLabel>
        <Select label="add uniform">
          <MenuItem value={10}>Dress</MenuItem>
          <MenuItem value={20}>Shirt</MenuItem>
          <MenuItem value={30}>Jacket</MenuItem>
          <MenuItem value={40}>Pants</MenuItem>
        </Select>
      </FormControl>
    );
  } else {
    select = (
      <FormControl fullWidth disabled>
        <InputLabel>Uniform Piece</InputLabel>
        <Select label="add uniform"></Select>
      </FormControl>
    );
  }

  return (
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
          Add Uniform
        </Typography>
      </div>
      <div className={styles.wrapperSelectSection}>
        <Box sx={{ flexGrow: 1, ml: 2, mr: 2, mb: 2, mt: 2 }}>
          <Grid container spacing={2} columns={2}>
            <Grid item xs={12} align="center" justify="center">
              <FormControl fullWidth>
                <InputLabel>Uniform Type</InputLabel>
                <Select label="add uniform" onChange={handleChange}>
                  <MenuItem value={10}>Marching Band</MenuItem>
                  <MenuItem value={20}>HS Concert Band</MenuItem>
                  <MenuItem value={30}>MS Concert Band</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} align="center" justify="center">
              {select}
            </Grid>
            <Grid item xs={12} align="center" justify="center">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Length"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} align="center" justify="center">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Chest"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} align="center" justify="center">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Head"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} align="center" justify="center">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Waist"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} align="center" justify="center">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Uniform ID"
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
  );
}
