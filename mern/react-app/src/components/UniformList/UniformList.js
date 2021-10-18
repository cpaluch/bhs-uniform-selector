import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import styles from './UniformList.module.css';
import Typography from '@mui/material/Typography';

export default function UniformList({ uniforms }) {

  const columns = [
    { field: 'type', headerName: 'Type of Uniform', width: 220 },
    { field: 'id', headerName: 'Uniform ID', width: 150 },
    { field: 'size', headerName: 'Size', width: 150 },
  ];
  
  const rows = [
    { type: 'Gauntlet', id: '1', size: 'Small'},
    { type: 'Gauntlet', id: '2', size: 'Medium'},
    { type: 'Gauntlet', id: '3', size: 'Large'},
    { type: 'Hat', id: '4', size: 'X-Large'},
    { type: 'Hat', id: '5', size: 'XX-Large'},
    { type: 'Hat', id: '6', size: 'Small'},
    { type: 'Jacket', id: '7', size: 'Medium'},
    { type: 'Jacket', id: '8', size: 'Large'},
    { type: 'Jacket', id: '9', size: 'X-Large'},
    { type: 'Jacket', id: '10', size: 'XX-Large'},
  ];
  
return (
<div className={styles.wrapperComponent}>
  <div className={styles.wrapperHeader}>
    <Typography ml={1} pl={1} mt={1} mb={1} variant="h6" color="white" fontWeight="bold" gutterBottom component="div">
        Uniforms
    </Typography>
  </div>
  <div className={styles.boxLimits}>
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
