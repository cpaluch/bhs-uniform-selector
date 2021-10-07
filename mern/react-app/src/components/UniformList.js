import React from 'react'
import UniformItem from './UniformItem'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function UniformList({ uniforms }) {
    return (


        <Box sx={{
            width: '400px',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"title title . . filter"
          "content content content content content"
          ". . . assign assign"`,
          }}>

            <Box sx={{ gridArea: 'title', backgroundColor: 'blue'}}>
                <Typography variant='h1' align='center' sx={{ color:'white', fontSize: 'x-large', p:2}}>Uniforms</Typography>
            </Box>

            <Box sx={{ gridArea: 'filter'}}>Filter</Box>

            <Card sx={{ gridArea: 'content'}}>
                <CardContent sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
                    <Typography variant='h2'align='center' sx={{ fontWeight: 'bold', fontSize: 'large'}}>Select</Typography>
                    <Typography variant='h2'align='center' sx={{ fontWeight: 'bold', fontSize: 'large'}}>Type</Typography>
                    <Typography variant='h2'align='center' sx={{ fontWeight: 'bold', fontSize: 'large'}}>Uniform ID</Typography>
                    <Typography variant='h2'align='center' sx={{ fontWeight: 'bold', fontSize: 'large'}}>Size</Typography>
                </CardContent>

                { uniforms.map(uniform => {
                    return <UniformItem uniform={ uniform }></UniformItem>
                })}
            </Card>

            <Box sx={{ gridArea: 'assign'}}>
                assignButton
            </Box>
        </Box>
        
    )
}
