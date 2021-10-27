import React, { Component } from 'react'
import AppBar from "@mui/material/AppBar"
import Link from "@mui/material/Link"
import ToolBar from "@mui/material/Toolbar"
import UniformAssignPage from '../../UniformAssignPage'
import ReportsPage from '../../ReportsPage'
import { CardMedia, Typography } from '@mui/material'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <AppBar position="static">
                <ToolBar>
                    <img src="images/bruins.png" alt="logo" height="50" width="50"/>
                    <Typography variant="h6" flexGrow="1" margin="20px">
                        Blacksburg Bands Uniform Select
                    </Typography>
                    <ul className={styles.link_box}>
                        <li className={styles.nav_link} ><NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="">Help</NavLink></li>
                    </ul>
                </ToolBar>
            </AppBar>
        )
    }
}