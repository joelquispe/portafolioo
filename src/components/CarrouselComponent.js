import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default function CarrouselComponent(props){
    
    return ( <div>
        <Carousel
        sx={{width:230}}
        NextIcon={<NavigateNextIcon/>}
        PrevIcon={<NavigateBeforeIcon/>}
        interval={1500}
        indicators={false}
        >
           {props.images.map((img,i)=> <CardMedia
          component="img"
          key={i}
          image={img}
        ></CardMedia>)}
       
       
           
        </Carousel>
    </div>)
}

