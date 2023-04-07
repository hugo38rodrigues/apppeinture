import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {Box} from '@mui/material';

const NavBar = () => {
    const location = useLocation()
    const isHome = location.pathname.includes('/')
    const isPeinture = location.pathname.includes('peinture')
    const isMaquette = location.pathname.includes('maquette')


    return (
        <div className='nav-bar' id='navBar'>
            {isHome && !isPeinture && !isMaquette &&
                <Box sx={{marginLeft: 2}}>
                    <NavLink to='/maquette'><img src="/avion-de-chasse.png" alt="bouton maquette"/></NavLink>
                    <NavLink to='/peinture'><img src="/pot-de-peinture.png" alt="bouton pot de peinture"/></NavLink>
                </Box>}
            {isPeinture &&
                <Box>
                    <NavLink to='/'><img src="/home.png" alt="bouton d'acceuil"/></NavLink>
                    <NavLink to='/maquette'><img src="/avion-de-chasse.png" alt="bouton maquette"/></NavLink>
                </Box>}
            {isMaquette &&
                <Box>
                    <NavLink to='/'><img src="/home.png" alt="bouton d'acceuil"/></NavLink>
                    <NavLink to='/peinture'><img src="/pot-de-peinture.png" alt="bouton pot de peinture"/></NavLink>
                </Box>
            }
        </div>
    )
}

export default NavBar;
