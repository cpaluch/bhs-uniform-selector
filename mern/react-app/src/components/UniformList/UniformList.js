import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import styles from './UniformList.module.css';
import Typography from '@mui/material/Typography';

export default function UniformList(props) {

  const columns = [
    { field: 'type', headerName: 'Type of Uniform', width: 220 },
    { field: 'id', headerName: 'Uniform ID', width: 150 },
    { field: 'size', headerName: 'Size', width: 150 },
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
          rows={props.uniforms}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
      </div>
    </div>
  );

}