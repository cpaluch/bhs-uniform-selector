import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import styles from './UniformList.module.css';
import Typography from '@mui/material/Typography';

export default function UniformList(props) {

  const columns = [
    { field: 'type', headerName: 'Piece', width:  150},
    { field: 'uniform_id', headerName: 'Uniform ID', width: 150 }
  ];

  const columns_jacket = [
    { field: 'piece', headerName: 'Piece', width: 125 },
    { field: 'uniform_id', headerName: 'ID', width: 125 },
    { field: 'chest',  headerName: 'Chest',  width: 125 },
    { field: 'jacket_length', headerName: 'Jacket Length', width: 125 },
    { field: 'type', headerName: 'Type', width: 125}
  ];

  const columns_pants = [
    { field: 'piece', headerName: 'Piece', width: 150 },
    { field: 'uniform_id', headerName: 'ID', width: 150 },
    { field: 'waist', headerName: 'Waist', width: 150}
  ];

  const columns_hat = [
    { field: 'piece', headerName: 'Piece', width: 150 },
    { field: 'uniform_id', headerName: 'ID', width: 150 },
    { field: 'head', headerName: 'Head', width: 150}
  ]

  const getColumns = () => {
    if (props.selectedPiece == "Jacket") {
      return columns_jacket;
    } else if (props.selectedPiece == "Pants") {
      return columns_pants;
    } else if (props.selectedPiece == "Hat") {
      return columns_hat;
    } else if (props.selectedPiece == "Gauntlet") {
      return columns;
    } else {
      return columns;
    }
  }

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
          columns={getColumns()}
          pageSize={25}
          rowsPerPageOptions={[25]}
          checkboxSelection
          onSelectionModelChange={(newSelection) => {
            props.onSelectedUniformsChange(newSelection);
          }}
        />
      </div>
    </div>
  );

}
