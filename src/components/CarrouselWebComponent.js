import React from 'react';
import Carousel from 'react-material-ui-carousel'

import {  CardMedia } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default function CarrouselComponent(props){
    
    return ( <div>
        <Carousel
        sx={{width:560}}
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




