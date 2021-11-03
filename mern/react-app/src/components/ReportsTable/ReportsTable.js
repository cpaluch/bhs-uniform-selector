import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport, gridClasses,} from '@mui/x-data-grid';
import styles from './ReportsTable.module.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function ReportsTable() {
    const columns = [
        { field: 'type', headerName: 'Type of Uniform', width: 200},
        { field: 'piece', headerName: 'Piece of Uniform', width: 200},
        { field: 'id', headerName: 'Uniform ID', width: 200 },
        { field: 'size', headerName: 'Size', width: 300 },
        { field: 'lastName', headerName: 'Last name', width: 150 },
        { field: 'firstName', headerName: 'First name', width: 150 },
        // { field: 'stdID', headerName: 'Meh', width: 150 },
      ];


      
      const [allUniforms, setAllUniforms] = useState([]);

      useEffect(() => {
        let mount = true
        getAllUniforms()
        return () => mount = false
      }, [])

      const getAllUniforms = async () => {

        return await axios.get("http://localhost:3000/uniforms/allUniforms").then(res => {
          const uniforms = res.data
          console.log(uniforms)
          setAllUniforms(uniforms)
        })
        
      }



      const rows = [
        { type: 'Marching Band', piece: 'Hat', id: 'Hat 1', size: 'S', lastName: 'Nachabe', firstName: 'Foad', stdID: 1},
        { type: 'Marching Band', piece: 'Jumpsuit', id: 'Jumpsuit 2', size: 'M', lastName: 'Nelli', firstName: 'Ashish', stdID: 2},
        { type: 'Marching Band', piece: 'Jacket', id: 'Jacket 3', size: 'L', lastName: 'N/A', firstName: 'N/A', stdID: -1},
        { type: 'Marching Band', piece: 'Poncho', id: 'Poncho 4', size: 'XL', lastName: 'N/A', firstName: 'N/A', stdID: -1},
        { type: 'HS Concert Band', piece: 'Dress', id: 'Dress 5', size: 'XXL', lastName: 'Hefner', firstName: 'Noah', stdID: 3},
        { type: 'HS Concert Band', piece: 'Shirt', id: 'Shirt 6', size: 'S', lastName: 'Nachabe', firstName: 'Foad', stdID: 1},
        { type: 'HS Concert Band', piece: 'Jacket', id: 'Jacket 7', size: 'M', lastName: 'Nelli', firstName: 'Ashish', stdID: 2},
        { type: 'HS Concert Band', piece: 'Pants', id: 'Pants 8', size: 'L', lastName: 'Anderson', firstName: 'Jared', stdID: 4},
        { type: 'MS Concert Band', piece: 'Dress', id: 'Dress 9', size: 'XL', lastName: 'Paluch', firstName: 'Cole', stdID: 5},
        { type: 'MS Concert Band', piece: 'Shirt', id: 'Shirt 10', size: 'XXL', lastName: 'Hefner', firstName: 'Noah', stdID: 3},
        { type: 'MS Concert Band', piece: 'Jacket', id: 'Jacket 11', size: 'L', lastName: 'Anderson', firstName: 'Jared', stdID: 4},
        { type: 'MS Concert Band', piece: 'Pants', id: 'Pants 12', size: 'XL', lastName: 'Paluch', firstName: 'Cole', stdID: 5},
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
          rows={allUniforms}
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