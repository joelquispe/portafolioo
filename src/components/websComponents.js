import Button from '@mui/material/Button';
import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
const WebsComponent = () => {
  return <Paper elevation={5} >
    <div class="text-center"><h2>Desarrollo web</h2></div>
    <div class="d-flex flex-wrap justify-content-center ">

      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 370 }} >
        <CardMedia
          component="img"
          image="./img/proyects/web/portafolio.png"

        ></CardMedia>
        <CardContent class=" d-grid mt-2">
          <Typography gutterBottom variant="h5" component="div">
            Portafolio
          </Typography>
          <Typography variant="body2" >
            Portafolio de desarrollador
          </Typography>
          <Button variant="contained" href="https://github.com/joelquispe/briefcaseJoelQuispe" >Github</Button>
          <Button variant="contained" href="https://joelquispe.github.io/briefcaseJoelQuispe/" >View</Button>
        </CardContent>
      </Card>
      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 370 }} >
        <CardMedia
          component="img"
          image="./img/proyects/web/panel1.png"

        ></CardMedia>
        <CardContent class=" d-grid mt-2">
          <Typography gutterBottom variant="h5" component="div">
            Panel web angular
          </Typography>
          <Typography variant="body2" >
            Aplicación web administrable hecho en angular
          </Typography>
          <Button variant="contained" >Github</Button>
          <Button variant="contained" href="https://panelangular1.firebaseapp.com/#/login" >View</Button>
        </CardContent>
      </Card>
      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 370 }} >
        <CardMedia
          component="img"
          image="./img/proyects/web/music.png"

        ></CardMedia>
        <CardContent class=" d-grid mt-2">
          <Typography gutterBottom variant="h5" component="div">
            Música
          </Typography>
          <Typography variant="body2" >
            Página web de reproducción de música.
          </Typography>
          <Button variant="contained" >Github</Button>
          <Button variant="contained" href="https://joelquispe.github.io/music/">View</Button>
        </CardContent>
      </Card>
      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 370 }} >
        <CardMedia
          component="img"
          image="./img/proyects/web/gameabc.png"

        ></CardMedia>
        <CardContent class=" d-grid mt-2">
          <Typography gutterBottom variant="h5" component="div">
            Juego de abecedario
          </Typography>
          <Typography variant="body2" >
            Juego de escribir correctamente la letra que esta al costado
          </Typography>
          <Button variant="contained" >Github</Button>
          <Button variant="contained" href="https://joelquispe.github.io/abecedario-original/" >View</Button>
        </CardContent>
      </Card>
      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 370 }} >
        <CardMedia
          component="img"
          image="./img/proyects/web/formulario.png"

        ></CardMedia>
        <CardContent class=" d-grid mt-2">
          <Typography gutterBottom variant="h5" component="div">
            Formulario
          </Typography>
          <Typography variant="body2" >
            Formulario para registrarse responsive
          </Typography>
          <Button variant="contained" >Github</Button>
          <Button variant="contained" href="https://joelquispe.github.io/formResponsive/">View</Button>
        </CardContent>
      </Card>
      
      
      
    </div>
  </Paper>
}

export default WebsComponent;