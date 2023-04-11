import React from 'react';
import NavBar from '../component/nav-bar';
import {Button, FormControl, Input, TextField, Typography} from '@mui/material';


const Maquette = () => {

    return (
        <div className='page'>
            <NavBar/>
            <div className='content-form'>
                {/*<FormControl >*/}
                <Typography> Ajouter votre maquette</Typography>

                <Input color="primary" type='text' placeholder='Titre de la maquette'></Input>
                <Input placeholder="Type in here…" color="primary"/>
                <Input type='text'></Input>

                <Input type='file' sx={{width: 150, height: 150}}/>


                {/*</FormControl>*/}
            </div>
        </div>
    );
};

export default Maquette;
