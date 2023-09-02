import React, {FunctionComponent} from 'react'
import {Box, Card, CardActionArea, CardContent, CardMedia, IconButton, Typography} from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

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
    <Box sx={{marginLeft: 15, marginBottom: 10, width: 840, display: 'flex', flexWrap: 'wrap'}}>
      {dataFlyer.map((item) => (
        <Box key={item.id} sx={{margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
          <Card raised>
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
            <IconButton
              color="error"
              edge="end"
              onClick={() => {
                deletedMaquette(item.id)
              }}>
              <DeleteForeverIcon />
            </IconButton>
          </Card>
        </Box>
      ))}
    </Box>

  )
}


export default DisplayFly

