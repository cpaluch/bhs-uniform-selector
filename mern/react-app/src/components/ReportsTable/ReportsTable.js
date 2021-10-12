import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import styles from './ReportsTable.module.css';
import Typography from '@mui/material/Typography';

export default function ReportsTable() {
    const columns = [
        { field: 'type', headerName: 'Type of Uniform', width: 200},
        { field: 'id', headerName: 'Uniform ID', width: 200 },
        { field: 'size', headerName: 'Size', width: 500 },
        { field: 'lastName', headerName: 'Last name', width: 150 },
        { field: 'firstName', headerName: 'First name', width: 150 },
      ];
      
      const rows = [
        { type: 'Marching Band', id: '1', size: 'S', lastName: 'Nachabe', firstName: 'Foad'},
        { type: 'Drum Line', id: '2', size: 'M', lastName: 'Nelli', firstName: 'Ashish'},
        { type: 'Clarinet', id: '3', size: 'L', lastName: 'Anderson', firstName: 'Jared'},
        { type: 'I dont know', id: '4', size: 'XL', lastName: 'Paluch', firstName: 'Cole'},
        { type: 'Squidwards Band', id: '5', size: 'XXL', lastName: 'Hefner', firstName: 'Noah'},
      ];
      
  return (
    <div className={styles.wrapperComponent}>
      <div className={styles.wrapperHeader}>
        <Typography ml={2} mt={1} mb={1} variant="h6" color="white" fontWeight="bold" gutterBottom component="div">
            Reports Page
        </Typography>
      </div>
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
      </div>
    </div>
  );
}