import React from 'react';
import './UniformItem.css';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const style = {

    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)'
}
export default function UniformItem() {
    return (
        <>
            <Card>
                <CardContent sx={style}>

                    <Checkbox size="large"></Checkbox>
                    <Typography >Type</Typography>
                    <Typography>ID</Typography>
                    <Typography>Size</Typography>

                </CardContent>

                
            </Card>
        </>
        
    )
}
