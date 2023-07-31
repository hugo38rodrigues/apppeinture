import React, {FunctionComponent} from 'react';
import {Box, Button, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';

interface DataFlyer {
    id: number
    title: string
    alt: string
    image: string
}

interface DisplayFlyprops {
    dataFlyer: DataFlyer[]
}

export const DisplayFly: FunctionComponent<DisplayFlyprops> = (prop) => {
    const {dataFlyer} = prop
    const deletedMaquette = (id: number) => {
        console.log(id)
    }

    return (
        <Box sx={{marginLeft: 15, marginBottom: 10, width: 840, display:'flex', flexWrap: 'wrap'}}>
                {dataFlyer.map((item) => (
                    <Box key={item.id} sx={{margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                        <Box>
                            <CardActionArea sx={{ boxShadow:3, marginBottom:2}}>
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image={item.image}
                                    alt={item.alt}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Box>
                        <Button variant="contained" className="add-button" sx={{width: 100, boxShadow: 10}} onClick={() => {
                            deletedMaquette(item.id);
                        }}>
                            Supprimer
                        </Button>
                    </Box>
                ))}
        </Box>

    )
}


export default DisplayFly

