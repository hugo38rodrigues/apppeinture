import React from 'react';
import NavBar from '../component/nav-bar';
import {Button, FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent, Typography} from '@mui/material';


const Maquette = () => {
    const [marque, setMarque] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setMarque(event.target.value as string);
    };

    return (
        <div className='page'>
            <NavBar/>
            <div className='content-form'>
                <Typography> Ajouter votre maquette</Typography>

                <Input color="primary" type='text' placeholder='Titre de la maquette'/>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={marque}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>


                <Input type='file' placeholder='Photo de la maquette'/>
                <Button color="primary" variant="contained">Ajout des pots de peintures </Button>
                <Button color="success" variant="contained">Crée la maquette</Button>
            </div>
        </div>
    )
}

export default Maquette;
