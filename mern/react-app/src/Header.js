import React, { Component } from 'react'
import AppBar from "@mui/material/AppBar"
import Link from "@mui/material/Link"
import ToolBar from "@mui/material/Toolbar"
import { CardMedia, Typography } from '@mui/material'

export default class Header extends Component {
    render() {
        return (
            <AppBar position="static">
                <ToolBar>
                    <img src="images/bruins.png" alt="logo" height="50" width="50"/>
                    <Typography variant="h6" flexGrow="1" margin="20px">
                        Blacksburg Bands Uniform Select
                    </Typography>
                    <Link color="inherit" underline="none" margin="20px">Add Uniforms</Link>
                    <Link color="inherit" underline="none" margin="20px">Uniform Selection</Link>
                    <Link color="inherit" underline="none" margin="20px">Reports</Link>
                    <Link color="inherit" underline="none" margin="20px">Help</Link>
                </ToolBar>
            </AppBar>
        )
    }
}
