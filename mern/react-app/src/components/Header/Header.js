import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import { Typography, Button } from "@mui/material";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <AppBar position="static">
      <ToolBar>
        <img src="images/bruins.png" alt="logo" height="50" width="50" />
        <Typography variant="h6" flexGrow="1" margin="20px">
          Blacksburg Bands Uniform Select
        </Typography>
        <ul className={styles.link_box}>
          <li className={styles.nav_link}>
            <NavLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/assign-uniforms"
            >
              Uniform Selection
            </NavLink>
          </li>
          <li className={styles.nav_link}>
            <NavLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/reports"
            >
              Reports
            </NavLink>
          </li>
          <li className={styles.nav_link}>
            <NavLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/add-uniforms"
            >
              Add Uniforms
            </NavLink>
          </li>
          <li className={styles.nav_link}>
            <NavLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/manage-users"
            >
              Manage Users
            </NavLink>
          </li>
          <li className={styles.nav_link}>
            <NavLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/help"
            >
              Help
            </NavLink>
          </li>
          <li className={styles.nav_link}>
            <Button
              className={styles.button_style}
              variant="contained"
              onClick={props.onLogoutAttempt}
            >
              Logout
            </Button>
          </li>
        </ul>
      </ToolBar>
    </AppBar>
  );
}
