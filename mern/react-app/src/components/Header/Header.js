import React, { Component } from 'react'
import AppBar from "@mui/material/AppBar"
import ToolBar from "@mui/material/Toolbar"
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <ToolBar>
                    <img src="images/bruins.png" alt="logo" height="50" width="50"/>
                    <Typography variant="h6" flexGrow="1" ml="20px" sx={{ flexGrow: 1 }}>
                        Blacksburg Bands Uniform Select
                    </Typography>
                    <ul className={styles.link_box}>
                        <li className={styles.nav_link} ><NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="">Add Uniforms</NavLink></li>
                        <li className={styles.nav_link} ><NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/assign-uniforms">Uniform Selection</NavLink></li>
                        <li className={styles.nav_link} ><NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/reports">Reports</NavLink></li>
                        <li className={styles.nav_link} ><NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="">Help</NavLink></li>
                    </ul>
                </ToolBar>
            </AppBar>
          </Box>
        )
    }
}
