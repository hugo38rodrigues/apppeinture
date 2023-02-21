import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <div id='navbar'>
            <NavLink to='/'><img src="" alt="avion"/></NavLink>
            <NavLink to='/peinture'><img src="" alt="peinture"/></NavLink>
            <NavLink to='/maquette'><img src="" alt="maquette"/></NavLink>
        </div>
    );
};

export default NavBar;
