import Button from '@mui/material/Button';
import '../App.css';
import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
const DesignComponent = () => {
  return <Paper elevation={5} >
    <div class="text-center"><h2>Diseños</h2></div>
    <div class="d-flex flex-wrap justify-content-center ">

      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 370 }} >
        <CardMedia
        className="cardImg"
          component="img"
          image="./img/design/design0.png"

        ></CardMedia>
        <CardContent class=" d-grid mt-2">
          <Typography gutterBottom variant="h5" component="div">
          Diseño de cursos
          </Typography>
         
          
        </CardContent>
      </Card>
      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 370 }} >
        <CardMedia
        
        className="cardImg"
          component="img"
          image="./img/design/design1.png"

        ></CardMedia>
        <CardContent class=" d-grid mt-2">
          <Typography gutterBottom variant="h5" component="div">
            Diseño de web gta
          </Typography>
        
        </CardContent>
      </Card>
      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 370 }} >
        <CardMedia
         className="cardImg"
          component="img"
          image="./img/design/design2.png"

        ></CardMedia>
        <CardContent class=" d-grid mt-2">
          <Typography gutterBottom variant="h5" component="div">
          Diseño de dragon ball
          </Typography>
          
        
        </CardContent>
      </Card>
      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 370 }} >
        <CardMedia
         className="cardImg"
          component="img"
          image="./img/design/design3.png"

        ></CardMedia>
        <CardContent class=" d-grid mt-2">
          <Typography gutterBottom variant="h5" component="div">
            Diseño de app de servicios
          </Typography>
         
          
        </CardContent>
      </Card>
      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 370 }} >
        <CardMedia
         className="cardImg"
          component="img"
          image="./img/design/design4.png"

        ></CardMedia>
        <CardContent class=" d-grid mt-2">
          <Typography gutterBottom variant="h5" component="div">
            Diseño de app de marcaje
          </Typography>
          
          
        </CardContent>
      </Card>
      
      
      
      
    </div>
  </Paper>
}

export default DesignComponent;