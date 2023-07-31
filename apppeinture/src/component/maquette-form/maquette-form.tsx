import {
    Box,
    Button,
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
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box className='maquette-content'>
                <Typography variant='h4' marginTop={4}> Ajouter votre maquette</Typography>
                <Box sx={{display: 'flex'}}>
                    <label htmlFor="upload-photo" className="label-picture">
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
                            sx={{width: 227, height: 200, marginTop: 4}}
                        >
                            Choisissez votre image
                        </Button>
                    </label>
                    <Box>
                        <Box className='form-input'>
                            <TextField color="primary" type='text' placeholder='Titre de la maquette'/>
                            <Box sx={{margin: 2}}>
                                <InputLabel  id="select-paint" className='label-select-paint'>Marque de pot de peinture</InputLabel>
                                <Select
                                    labelId="select-paint"
                                    id="select-paint"
                                    value={marque}
                                    label="Age"
                                    onChange={handleChange}
                                    fullWidth
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column', height: 30, justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
                            <Button color="primary" variant="contained">Ajout des pots de peintures </Button>
                            <Button color="success" variant="contained">Crée la maquette</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MaquetteForm;
