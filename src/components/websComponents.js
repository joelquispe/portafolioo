import Button from '@mui/material/Button';
import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import CarrouselWebComponent from './CarrouselWebComponent';
const WebsComponent = () => {
  return <Paper elevation={5} >
    <div class="text-center"><h2>Desarrollo web</h2></div>
    <div class="d-flex flex-wrap justify-content-center ">

      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 600 }} >
      <CarrouselWebComponent images={["./img/webs/portafolio1/1.png","./img/webs/portafolio1/2.png","./img/webs/portafolio1/3.png","./img/webs/portafolio1/4.png"]}></CarrouselWebComponent>
        <CardContent class=" d-grid mt-2">
          <Typography gutterBottom variant="h5" component="div">
            Portafolio
          </Typography>
          <Typography variant="body2" >
            Portafolio de desarrollador hecho con html, javascript y css.
          </Typography>
          <Button variant="contained" href="https://github.com/joelquispe/briefcaseJoelQuispe" >Github</Button>
          <Button variant="contained" href="https://joelquispe.github.io/briefcaseJoelQuispe/" >View</Button>
        </CardContent>
      </Card>
      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 600 }} >
      <CarrouselWebComponent images={["./img/webs/crudbasicphp/1.png","./img/webs/crudbasicphp/2.png","./img/webs/crudbasicphp/3.png","./img/webs/crudbasicphp/4.png"]}></CarrouselWebComponent>
       
        <CardContent class=" d-grid mt-2">
          <Typography gutterBottom variant="h5" component="div">
            Gestión de productos
          </Typography>
          <Typography variant="body2" >
            Página web de gestión de productos hecho en laravel y conectado a base de datos mysql
          </Typography>
          <Button variant="contained" href="https://github.com/joelquispe/briefcaseJoelQuispe" >Github</Button>
          <Button variant="contained" href="https://joelquispe.github.io/briefcaseJoelQuispe/" >View</Button>
        </CardContent>
      </Card>
      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 600 }} >
      <CarrouselWebComponent images={["./img/webs/music1/1.png","./img/webs/music1/2.png","./img/webs/music1/3.png","./img/webs/music1/4.png"]}></CarrouselWebComponent>
        <CardContent class=" d-grid mt-2">
          <Typography gutterBottom variant="h5" component="div">
            Página web de musica
          </Typography>
          <Typography variant="body2" >
            Página web de reproducción de musica hecho con html, javascript y css
          </Typography>
          <Button variant="contained" >Github</Button>
          <Button variant="contained" href="https://joelquispe.github.io/music/" >View</Button>
        </CardContent>
      </Card>
      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 600 }} >
      <CarrouselWebComponent images={["./img/webs/panelangularmodel/1.png","./img/webs/panelangularmodel/2.png","./img/webs/panelangularmodel/3.png","./img/webs/panelangularmodel/4.png","./img/webs/panelangularmodel/5.png","./img/webs/panelangularmodel/6.png","./img/webs/panelangularmodel/7.png"
    ,"./img/webs/panelangularmodel/8.png","./img/webs/panelangularmodel/9.png","./img/webs/panelangularmodel/10.png"]}></CarrouselWebComponent>
        <CardContent class=" d-grid mt-2">
          <Typography gutterBottom variant="h5" component="div">
            Panel web angular
          </Typography>
          <Typography variant="body2" >
            Aplicación web administrable hecho en angular y conectado a firebase
          </Typography>
          <Button variant="contained" >Github</Button>
          <Button variant="contained" href="https://panelangular1.firebaseapp.com/#/login" >View</Button>
        </CardContent>
      </Card>
      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 600 }} >
      <CarrouselWebComponent images={["./img/webs/gameabc/1.png","./img/webs/gameabc/2.png","./img/webs/gameabc/3.png","./img/webs/gameabc/4.png"]}></CarrouselWebComponent>
        
        <CardContent class=" d-grid mt-2">
          <Typography gutterBottom variant="h5" component="div">
            Página de cursos
          </Typography>
          <Typography variant="body2" >
            Página web de cursos de programación
          </Typography>
          <Button variant="contained" >Github</Button>
          <Button variant="contained" href="https://joelquispe.github.io/abecedario-original/" >View</Button>
        </CardContent>
      </Card>
      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 600 }} >
      <CarrouselWebComponent images={["./img/webs/developers/1.jpg","./img/webs/developers/2.png","./img/webs/developers/3.png"]}></CarrouselWebComponent>
        
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
      <Card className=" p-3 text-center m-2 d-grid justify-content-center" elevation={10} sx={{ bgcolor: 'secondary.main', maxWidth: 600 }} >
        <CardMedia
          component="img"
          image="./img/proyects/web/formulario.jpg"

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