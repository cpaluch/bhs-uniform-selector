import React, { useState, useEffect } from "react";
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
  const [selectValPiece, setSelectedValPiece] = useState("");
  const [headVisibility, disableHeadBox] = useState(false);
  const [waistVisibility, disableWaistBox] = useState(false);
  const [lengthVisibility, disableLengthBox] = useState(false);
  const [chestVisibility, disableChestBox] = useState(false);

  let select;
  let hat = "hat";
  let jumpsuit = "jumpsuit";
  let jacket = "jacket";
  let poncho = "poncho";
  let dress = "dress";
  let shirt = "shirt";
  let pants = "pants";

  useEffect(() => {
    if (selectValPiece == hat) {
      disableChestBox(true);
      disableLengthBox(true);
      disableWaistBox(true);
      disableHeadBox(false);
    }
    if (selectValPiece == jumpsuit) {
      disableWaistBox(false);
      disableHeadBox(true);
      disableLengthBox(false);
      disableChestBox(true);
    }
    if (selectValPiece == jacket) {
      disableWaistBox(true);
      disableHeadBox(true);
      disableLengthBox(false);
      disableChestBox(false);
    }
    if (selectValPiece == poncho) {
      disableWaistBox(true);
      disableHeadBox(true);
      disableLengthBox(true);
      disableChestBox(false);
    }
    if (selectValPiece == dress) {
      disableWaistBox(false);
      disableHeadBox(true);
      disableLengthBox(false);
      disableChestBox(false);
    }
    if (selectValPiece == shirt) {
      disableWaistBox(true);
      disableHeadBox(true);
      disableLengthBox(true);
      disableChestBox(false);
    }
    if (selectValPiece == pants) {
      disableWaistBox(false);
      disableHeadBox(true);
      disableLengthBox(false);
      disableChestBox(true);
    }
  }, [selectValPiece]);

  function handleChange(e) {
    setSelectedVal(e.target.value);
  }

  function handlePieceChange(e) {
    setSelectedValPiece(e.target.value);
    console.log(selectValPiece);
  }

  if (selectVal == "10") {
    select = (
      <FormControl fullWidth>
        <InputLabel>Uniform Piece</InputLabel>
        <Select label="add uniform" onChange={handlePieceChange}>
          <MenuItem value={hat}>Hat</MenuItem>
          <MenuItem value={jumpsuit}>JumpSuit</MenuItem>
          <MenuItem value={jacket}>Jacket</MenuItem>
          <MenuItem value={poncho}>Poncho</MenuItem>
        </Select>
      </FormControl>
    );
  } else if (selectVal == "20" || selectVal == "30") {
    select = (
      <FormControl fullWidth>
        <InputLabel>Uniform Piece</InputLabel>
        <Select label="add uniform" onChange={handlePieceChange}>
          <MenuItem value="dress">Dress</MenuItem>
          <MenuItem value="shirt">Shirt</MenuItem>
          <MenuItem value="jacket">Jacket</MenuItem>
          <MenuItem value="pants">Pants</MenuItem>
        </Select>
      </FormControl>
    );
  } else {
    console.log(selectVal);
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
                disabled={lengthVisibility}
              />
            </Grid>
            <Grid item xs={12} align="center" justify="center">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Chest"
                variant="outlined"
                disabled={chestVisibility}
              />
            </Grid>
            <Grid item xs={12} align="center" justify="center">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Head"
                variant="outlined"
                disabled={headVisibility}
              />
            </Grid>
            <Grid item xs={12} align="center" justify="center">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Waist"
                variant="outlined"
                disabled={waistVisibility}
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
