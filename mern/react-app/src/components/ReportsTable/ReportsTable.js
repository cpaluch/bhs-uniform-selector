import React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport, gridClasses,} from '@mui/x-data-grid';
import styles from './ReportsTable.module.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function ReportsTable(props) {
    const columns = [
        { field: 'type', headerName: 'Type of Uniform', width: 200},
        { field: 'piece', headerName: 'Piece of Uniform', width: 200},
        { field: 'id', headerName: 'Uniform ID', width: 200 },
        { field: 'size', headerName: 'Size', width: 300 },
        { field: 'lastName', headerName: 'Last name', width: 150 },
        { field: 'firstName', headerName: 'First name', width: 150 },
        // { field: 'stdID', headerName: 'Meh', width: 150 },
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
          rows={props.uniforms}
          columns={columns.map((columns) => ({...columns, sortable: false, }))}
          pageSize={8}
          rowsPerPageOptions={[8]}
          isRowSelectable={(param) => param.row.stdID > 0}
          checkboxSelection
        />
      </div>
      <Button variant="contained">
        Remove Student
      </Button>
    </div>
  );
}