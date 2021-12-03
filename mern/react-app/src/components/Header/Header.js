import React from "react";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import { Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <AppBar position="static">
      <ToolBar className={styles.bar_style}>
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
              style={{ color: "#0000e0", backgroundColor: "#efc500" }}
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
