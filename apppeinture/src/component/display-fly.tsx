import React, {FunctionComponent} from 'react';
import {Box, Button, Card, CardActionArea, CardMedia, Typography} from '@mui/material';
import AddFly from './add-fly';
import NavBar from './nav-bar';


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
        <>
            <div className='display-fly'>
                <NavBar/>
                <div className='flys'>
                    <div className='fly'>
                        {dataFlyer.map((item) => (
                            <Box className='cards' key={item.id} sx={{marginLeft: 20, marginTop: 4}}>
                                <Card sx={{width: 400, height: 350, border: 'solid'}} id='card'>
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h4" component="div" sx={{marginLeft: 8}}>
                                            {item.title}
                                        </Typography>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={item.image}
                                            alt={item.alt}/>
                                    </CardActionArea>
                                </Card>
                                <Button variant="contained" sx={{width: 100}} onClick={() => {
                                    deletedMaquette(item.id);
                                }}>
                                    Supprimer
                                </Button>
                            </Box>
                        ))}
                    </div>
                </div>
                <AddFly/>
            </div>

        </>

    )
}


export default DisplayFly

