import React, {FunctionComponent} from 'react';
import {Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';
import AddFly from './add-fly';


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
        <Box sx={{ width: 1200}}>
            <div className='display-fly'>
                        {dataFlyer.map((item) => (
                            <Box className='cards' key={item.id} >
                                <Card sx={{ maxWidth: 845, margin: 8 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={item.image}
                                            alt={item.alt}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Button variant="contained" className="add-button" sx={{width: 100}} onClick={() => {
                                    deletedMaquette(item.id);
                                }}>
                                    Supprimer
                                </Button>
                            </Box>
                        ))}
                <AddFly/>
            </div>
        </Box>

    )
}


export default DisplayFly

