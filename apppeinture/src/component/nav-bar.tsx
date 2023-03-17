import React from 'react';
import {NavLink} from 'react-router-dom';
import {Box} from '@mui/material';

const NavBar = () => {

    return (
        <Box sx={{className: 'nav-bar'}} id='navBar'>
            <NavLink to='/'><img src="" alt="avion"/></NavLink>
            <NavLink to='/peinture'><img src="" alt="peinture"/></NavLink>
            <NavLink to='/maquette'><img src="" alt="maquette"/></NavLink>
        </Box>
    );
};

export default NavBar;
