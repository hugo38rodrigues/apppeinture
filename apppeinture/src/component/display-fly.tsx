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
        <Box sx={{width: 840, paddingRight: 20}}>
            <div className='display-fly'>
                {dataFlyer.map((item) => (
                    <Box className='cards' key={item.id}>
                        <Box  className='card-front'>
                            <CardActionArea>
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
            </div>
        </Box>

    )
}


export default DisplayFly

