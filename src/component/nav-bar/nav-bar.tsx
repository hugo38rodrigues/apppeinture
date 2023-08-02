import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import './nav-bar-style.css'

const NavBar = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'
    const isMaquette = location.pathname === '/maquette'
    const isPeinture = location.pathname === '/peinture'

    return (
        <Box>
            <AppBar position="sticky" color="transparent" sx={{display: 'flex'}}>
                <Toolbar sx={{justifyContent: 'space-evenly'}}>
                    <Typography variant="h6" component="div"
                                className={isHome ? 'item-underline': ''}>
                        <NavLink className='item-nav-bar' to='/'> Home </NavLink>
                    </Typography>
                    <Typography variant="h6" component="div" className={isMaquette ? 'item-underline': ''}>
                        <NavLink className='item-nav-bar' to='/maquette'> Maquette</NavLink>
                    </Typography>
                    <Typography variant="h6" component="div" className={isPeinture ? 'item-underline': ''}>
                        <NavLink className='item-nav-bar' to='/peinture'> Pot de peinture</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;
