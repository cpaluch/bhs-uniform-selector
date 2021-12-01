import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./ManageUsers.module.css";
import { Typography, Button, Grid, TextField, Box } from "@mui/material";

export default function ManageUsers(props) {
  const columns = [
    { field: "f_name", headerName: "First Name", width: 125 },
    { field: "l_name", headerName: "Last Name", width: 125 },
    { field: "email", headerName: "Email", width: 200 },
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
            rows={props.users}
            getRowId={(row) => row._id}
            columns={columns}
            pageSize={25}
            rowsPerPageOptions={[25]}
            checkboxSelection
            onSelectionModelChange={(newSelection) => {
              props.onSelectedUsersChange(newSelection);
            }}
          />
          <Button
            variant="contained"
            style={{ color: "#0000e0", backgroundColor: "#efc500" }}
            onClick={props.onDeleteUsers}
          >
            Delete Users
          </Button>
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
          <Box
            component="form"
            onSubmit={props.onRegisterUser}
            noValidate
            sx={{ flexGrow: 1, ml: 2, mr: 2, mb: 2, mt: 2 }}
          >
            <Grid container spacing={2} columns={2}>
              <Grid item xs={12} align="center" justify="center">
                <TextField
                  fullWidth
                  id="f_name"
                  name="f_name"
                  label="First Name"
                  variant="outlined"
                  onChange={(e) => props.onFNameChange(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} align="center" justify="center">
                <TextField
                  fullWidth
                  id="l_name"
                  name="l_name"
                  label="Last Name"
                  variant="outlined"
                  onChange={(e) => props.onLNameChange(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} align="center" justify="center">
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  onChange={(e) => props.onEmailChange(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} align="center" justify="center">
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  onChange={(e) => props.onPasswordChange(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} align="right" justify="right">
                <Button
                  variant="contained"
                  style={{ color: "#0000e0", backgroundColor: "#efc500" }}
                  onClick={props.onRegisterUser}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}
