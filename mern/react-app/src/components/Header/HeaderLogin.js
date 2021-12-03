import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import styles from "./Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <ToolBar className={styles.bar_style}>
          <img src="images/bruins.png" alt="logo" height="50" width="50" />
          <Typography variant="h6" flexGrow="1" margin="20px">
            Blacksburg Bands Uniform Select
          </Typography>
        </ToolBar>
      </AppBar>
    );
  }
}
