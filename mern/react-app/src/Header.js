import React, { Component } from 'react'
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"

export default class Header extends Component {
    render() {
        return (
            <Box sx = {{flexGrow: 1}}>
                <AppBar position="static">

                </AppBar>
            </Box>
        )
    }
}
