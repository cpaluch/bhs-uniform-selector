import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function UniformItem({ uniform }) {
    return (
        <>

            <Card variant='outlined' sx={{minWidth: 275,  p: 2}}>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
                    <div align='center'>
                        <Checkbox size="large"></Checkbox>
                    </div>
                    <Typography sx={{m: 'auto'}}>{uniform.type}</Typography>
                    <Typography sx={{m: 'auto'}}>{uniform.id}</Typography>
                    <Typography sx={{m: 'auto'}}>{uniform.size}</Typography>
                </Box>
            </Card>
        </>
    )
}
