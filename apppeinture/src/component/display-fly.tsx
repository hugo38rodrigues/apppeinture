import React, {FunctionComponent} from 'react';
import {Button, Card, CardActionArea, CardMedia, Typography} from '@mui/material';


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
        <div className="display-fly">
            {dataFlyer.map((item) => (
                <Card sx={{maxWidth: 10, maxHeight: 10}} id={'display-fly'} key={item.id}>
                    <CardActionArea>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <CardMedia
                            component="img"
                            height="150"
                            image={item.image}
                            alt={item.alt}/>
                    </CardActionArea>
                    <Button color="error" variant="outlined" onClick={() => {
                        deletedMaquette(item.id)
                    }}>
                        Supprimer
                    </Button>

                </Card>
            ))}
        </div>
    )
}
export default DisplayFly;


