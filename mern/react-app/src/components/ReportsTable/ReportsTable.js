import React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport, gridClasses, } from '@mui/x-data-grid';
import styles from './ReportsTable.module.css';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function ReportsTable(props) {
  const columns = [
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'piece', headerName: 'Piece', width: 150 },
    { field: 'uniform_id', headerName: 'ID', width: 500 },
    { field: 'l_name', headerName: 'Last name', width: 200 },
    { field: 'f_name', headerName: 'First name', width: 200 },
  ];

  return (
    <div className={styles.wrapperComponent}>
      <div className={styles.wrapperHeader}>
        <Typography ml={2} mt={1} mb={1} variant="h6" color="white" fontWeight="bold" gutterBottom component="div">
          Reports Page
        </Typography>
      </div>
      <div className={styles.boxLimits}>
        <DataGrid
          components={{
            Toolbar: CustomToolbar,
          }}
          rows={props.rows}
          columns={columns.map((columns) => ({ ...columns, sortable: false, }))}
          pageSize={8}
          rowsPerPageOptions={[8]}
          isRowSelectable={(param) => param.row.student_id !== ""}
          checkboxSelection
          getRowId={(row) => row._id}
          onSelectionModelChange={(newChange) => {
            props.onSelectedUniformsChange(newChange);
          }}
        />
      </div>
    </div>
  );
}