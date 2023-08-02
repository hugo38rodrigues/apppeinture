import React from 'react'
import {Box, Fab, hexToRgb} from '@mui/material'
import {Link} from 'react-router-dom'

const AddFly = () => {
  return (
    <Box>
      <Link to="/maquette">
        <Fab sx={{fontSize: 45, boxShadow: 10, backgroundColor: 'white', color: hexToRgb('87CEF')}} aria-label="add">
          +
        </Fab>
      </Link>
    </Box>
  )
}

export default AddFly
