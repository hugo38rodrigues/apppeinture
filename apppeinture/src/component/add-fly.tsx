import React from 'react';
import {Box, Fab, hexToRgb} from '@mui/material';
import {Link} from 'react-router-dom';

const AddFly = () => {
    return (
        <Box sx={{ marginLeft: 10, marginTop: 50}}>
            <Link to='/maquette-avion'>
                <Fab sx={{fontSize: 45, backgroundColor: 'white', color: hexToRgb('87CEF')}} aria-label="add">
                    +
                </Fab>
            </Link>
        </Box>
    )
}

export default AddFly;