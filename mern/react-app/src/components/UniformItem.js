import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function UniformItem({uniform}) {
    return (
        <>
            <Card sx={{minWidth: 275,  p: 2}}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <div>
                        <Checkbox size="large"></Checkbox>
                    </div>
                    <Typography>{uniform.type}</Typography>
                    <Typography>{uniform.id}</Typography>
                    <Typography>{uniform.size}</Typography>
                </Box>
            </Card>
        </>
    )
}
