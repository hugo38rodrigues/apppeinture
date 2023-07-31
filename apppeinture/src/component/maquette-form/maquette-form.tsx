import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from '@mui/material';
import './maquette-form.css'
import React from 'react';

const MaquetteForm = () => {
    const [marque, setMarque] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setMarque(event.target.value as string);
    };

    return (
        <Box className='maquette-content'>
            <Typography variant='h4'> Ajouter votre maquette</Typography>
            <Box sx={{

            }}>
                <Box sx={{}}>
                    <label htmlFor="upload-photo">
                        <input
                            style={{display: 'none'}}
                            id="upload-photo"
                            name="upload-photo"
                            type="file"
                        />
                        <Button
                            color="secondary"
                            variant="outlined"
                            component="span"
                            sx={{width: 200, height: 200}}
                        >
                            Choisissez votre image
                        </Button>
                    </label>
                    <TextField color="primary" type='text' placeholder='Titre de la maquette'/>
                </Box>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Marque de pot de peinture</InputLabel>
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
        </Box>
    );
};

export default MaquetteForm;
