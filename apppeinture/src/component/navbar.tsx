import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const [isDisplayAvion, setIsDisplayAvion] = useState<boolean>(true)
    const [isDisplayMaquette, setIsDisplayMaquette] = useState<boolean>(true)
    const [isDisplayPeinture, setIsDisplayPeinture] = useState<boolean>(true)
    const handleDisplayButton = (event) => {
        const value = event.currentTarget
        if (value === 'avion') {
            setIsDisplayMaquette(true)
            setIsDisplayPeinture(true)
            setIsDisplayAvion(false)

        } else if (value === 'maquette') {
            setIsDisplayMaquette(false)
            setIsDisplayAvion(true)
            setIsDisplayPeinture(true)
        }
        setIsDisplayMaquette(true)
        setIsDisplayAvion(true)
        setIsDisplayPeinture(false)
    }
    return (
        <div id='navbar'>
            {isDisplayAvion && <NavLink to='/' onClick={handleDisplayButton}><img src="" alt="avion"/></NavLink>}
            {isDisplayPeinture && <NavLink to='/peinture' onClick={handleDisplayButton}><img src="" alt="peinture"/></NavLink>}
            {isDisplayMaquette && <NavLink to='/maquette' onClick={handleDisplayButton}><img src="" alt="maquette"/></NavLink>}
        </div>
    );
};

export default Navbar;
