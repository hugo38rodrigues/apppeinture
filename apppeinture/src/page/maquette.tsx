import React from 'react';
import NavBar from '../component/nav-bar';
import {
    Box,
    Button,
    FormControl,
    Input,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from '@mui/material';


const Maquette = () => {
    const [marque, setMarque] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setMarque(event.target.value as string);
    };

    return (
        <div className='maquette-page'>
            <nav>
                <NavBar/>
            </nav>
            <article>
                <Box className='maquette-content'>
                    <Typography> Ajouter votre maquette</Typography>
                    <TextField sx={{ width:8, height:8}} type='file'/>

                    <TextField color="primary" type='text' placeholder='Titre de la maquette'/>
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


                    <Button color="primary" variant="contained">Ajout des pots de peintures </Button>
                    <Button color="success" variant="contained">Crée la maquette</Button>
                </Box>
            </article>
        </div>

    )
}

export default Maquette;
