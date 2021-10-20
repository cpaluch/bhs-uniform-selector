import React, { Component } from 'react'
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { Grid, Link, Typography } from '@mui/material'

export default class Footer extends Component {
    render() {
        return (
          <Box bgcolor="text.secondary" color="white">
              <Container maxWidth="lg">
                  <Grid container >
                      <Grid>
                          <Box margin="20px">
                              <Typography borderBottom={1}>Collaboration</Typography>
                              <Link color="inherit" underline="none">Blacksburg High School</Link>
                          </Box>
                      </Grid>
                      <Grid>
                         <Box margin="20px">
                              <Typography borderBottom={1}>Support</Typography>
                              <Link color="inherit" underline="none">Virginia Tech CS Department</Link>
                          </Box>
                      </Grid>
                      <Grid>
                          <Box margin="20px">
                              <Typography>Developed By: The Band Goons</Typography>
                          </Box>
                      </Grid>
                  </Grid>
              </Container>
          </Box>
        )
    }
}
