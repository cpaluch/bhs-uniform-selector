import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./ManageUsers.module.css";
import { Typography, Button, Grid, TextField, Box } from "@mui/material";

export default function ManageUsers() {
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "firstName", headerName: "First Name", width: 200 },
    { field: "lastName", headerName: "Last Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
  ];

  const rows = [
    { id: "1", firstName: "Ashish", lastName: "Nelli", email: "123@gmail.com" },
    { id: "2", firstName: "Cole", lastName: "Paluch", email: "abcd@gmail.com" },
    { id: "3", firstName: "Noah", lastName: "Hefner", email: "efg@gmail.com" },
    {
      id: "4",
      firstName: "Jared",
      lastName: "Anderson",
      email: "678@gmail.com",
    },
    {
      id: "5",
      firstName: "Foad",
      lastName: "Nachabe",
      email: "1009@yahoo.com",
    },
  ];

  return (
    <div className={styles.wrapperComponent}>
      <div className={styles.wrapperAddUser}>
        <div className={styles.wrapperHeader}>
          <Typography
            ml={1}
            pl={1}
            mt={1}
            mb={1}
            variant="h6"
            color="white"
            fontWeight="bold"
            gutterBottom
            component="div"
          >
            Users
          </Typography>
        </div>
        <div className={styles.boxLimits}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageemail={8}
            rowsPerPageOptions={[8]}
            checkboxSelection
          />
          <Button variant="contained">Remove User</Button>
        </div>
      </div>
      <div className={styles.wrapperAddUser}>
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
            Add User
          </Typography>
        </div>
        <div className={styles.boxLimits}>
          <Box sx={{ flexGrow: 1, ml: 2, mr: 2, mb: 2, mt: 2 }}>
            <Grid container spacing={2} columns={2}>
              <Grid item xs={12} align="center" justify="center">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} align="center" justify="center">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} align="center" justify="center">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Email"
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
    </div>
  );
}
