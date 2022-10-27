
import { React } from 'react';
import Button from '@mui/material/Button';
import {  Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';

import CarrouselComponent from './CarrouselComponent';
const AppsComponent = () => {
  
  return <Paper elevation={5} >
    
    <div class="text-center"  ><h2>Desarrollo Mobile</h2></div>

    <div className="d-flex flex-wrap justify-content-center " >
    <Card className="  p-3 text-center m-2 d-grid justify-content-center " elevation={10} sx={{bgcolor: 'secondary.main',maxWidth: 260 }} >
        {/* <img src="./img/proyects/bodega.jpeg" style={{ width: "220px" }} class="card-img-top" alt="..." /> */}
        <CarrouselComponent images={["./img/apps/segurity/1.jpg","./img/apps/segurity/2.jpg","./img/apps/segurity/3.jpg","./img/apps/segurity/4.jpg","./img/apps/segurity/5.jpg","./img/apps/segurity/6.jpg","./img/apps/segurity/7.jpg"]}></CarrouselComponent>
        <CardContent class=" d-grid mt-2">
          
          <Typography gutterBottom variant="h5" component="div">
          App segurity
        </Typography>
          <Typography variant="body2" >
          Aplicación con diferente seguridad para ingresar.
        </Typography>
          <Button variant="contained" >Github</Button>

          <Button variant="contained" href='https://www.mediafire.com/file/ixv34nupgvsqb6c/app-tienda.apk/file' download>Download </Button>
        </CardContent>
      </Card>
      <Card className="  p-3 text-center m-2 d-grid justify-content-center " elevation={10} sx={{bgcolor: 'secondary.main',maxWidth: 260 }} >
        {/* <img src="./img/proyects/bodega.jpeg" style={{ width: "220px" }} class="card-img-top" alt="..." /> */}
        <CarrouselComponent images={["./img/apps/task/1.jpg","./img/apps/task/2.jpg","./img/apps/task/3.jpg","./img/apps/task/4.jpg","./img/apps/task/5.jpg","./img/apps/task/6.jpg","./img/apps/task/7.jpg"]}></CarrouselComponent>
        <CardContent class=" d-grid mt-2">
          
          <Typography gutterBottom variant="h5" component="div">
          App Task
        </Typography>
          <Typography variant="body2" >
          Aplicación para la gestión de tareas.
        </Typography>
          <Button variant="contained" >Github</Button>

          <Button variant="contained" href='https://www.mediafire.com/file/ixv34nupgvsqb6c/app-tienda.apk/file' download>Download </Button>
        </CardContent>
      </Card>
    <Card className="  p-3 text-center m-2 d-grid justify-content-center " elevation={10} sx={{bgcolor: 'secondary.main',maxWidth: 260 }} >
        {/* <img src="./img/proyects/bodega.jpeg" style={{ width: "220px" }} class="card-img-top" alt="..." /> */}
        <CarrouselComponent images={["./img/apps/mibodega/1.jpg","./img/apps/mibodega/2.jpg","./img/apps/mibodega/3.jpg","./img/apps/mibodega/4.jpg","./img/apps/mibodega/5.jpg","./img/apps/mibodega/6.jpg","./img/apps/mibodega/7.jpg","./img/apps/mibodega/8.jpg","./img/apps/mibodega/9.jpg","./img/apps/mibodega/10.jpg","./img/apps/mibodega/11.jpg","./img/apps/mibodega/12.jpg"]}></CarrouselComponent>
        <CardContent class=" d-grid mt-2">
          
          <Typography gutterBottom variant="h5" component="div">
          Mi bodega
        </Typography>
          <Typography variant="body2" >
          Aplicación para la administración en ventas de tienda
        </Typography>
          <Button variant="contained" >Github</Button>

          <Button variant="contained" href='https://www.mediafire.com/file/ixv34nupgvsqb6c/app-tienda.apk/file' download>Download </Button>
        </CardContent>
      </Card>
      <Card className="  p-3 text-center m-2 d-grid justify-content-center " elevation={10} sx={{bgcolor: 'secondary.main',maxWidth: 260 }} >
        {/* <img src="./img/proyects/bodega.jpeg" style={{ width: "220px" }} class="card-img-top" alt="..." /> */}
        <CarrouselComponent images={["./img/apps/developers/1.jpg","./img/apps/developers/2.jpg","./img/apps/developers/3.jpg","./img/apps/developers/4.jpg","./img/apps/developers/5.jpg","./img/apps/developers/6.jpg","./img/apps/developers/7.jpg","./img/apps/developers/8.jpg"]}></CarrouselComponent>
        <CardContent class=" d-grid mt-2">
          
          <Typography gutterBottom variant="h5" component="div">
          Developers
        </Typography>
          <Typography  variant="body2">
          Aplicación que ofrece cursos de programación
        </Typography>
          <Button variant="contained" >Github</Button>

          <Button variant="contained" href='https://www.mediafire.com/file/f2q47hz88ni22yu/app-developers.apk/file' download>Download </Button>
        </CardContent>
      </Card>
      <Card className="  p-3 text-center m-2 d-grid justify-content-center " elevation={10} sx={{bgcolor: 'secondary.main',maxWidth: 260 }} >
        {/* <img src="./img/proyects/bodega.jpeg" style={{ width: "220px" }} class="card-img-top" alt="..." /> */}
        <CarrouselComponent images={["./img/apps/deliverybox/1.jpg","./img/apps/deliverybox/2.jpg","./img/apps/deliverybox/3.jpg","./img/apps/deliverybox/4.jpg","./img/apps/deliverybox/5.jpg","./img/apps/deliverybox/6.jpg","./img/apps/deliverybox/7.jpg","./img/apps/deliverybox/8.jpg","./img/apps/deliverybox/9.jpg"]}></CarrouselComponent>
        <CardContent class=" d-grid mt-2">
          
          <Typography gutterBottom variant="h5" component="div">
          Deliverybox
        </Typography>
          <Typography variant="body2" >
          Aplicación cotizador de paquetes y envios
        </Typography>
          <Button variant="contained" >Github</Button>

          <Button variant="contained" href='https://www.mediafire.com/file/69vb0pcu4lepqfj/appdropx.apk/file' download>Download </Button>
        </CardContent>
      </Card>
      <Card className="  p-3 text-center m-2 d-grid justify-content-center " elevation={10} sx={{bgcolor: 'secondary.main',maxWidth: 260 }} >
        {/* <img src="./img/proyects/bodega.jpeg" style={{ width: "220px" }} class="card-img-top" alt="..." /> */}
        <CarrouselComponent images={["./img/apps/appstore/1.jpg","./img/apps/appstore/2.jpg","./img/apps/appstore/3.jpg","./img/apps/appstore/4.jpg","./img/apps/appstore/5.jpg","./img/apps/appstore/6.jpg","./img/apps/appstore/7.jpg","./img/apps/appstore/8.jpg","./img/apps/appstore/9.jpg"]}></CarrouselComponent>
        <CardContent class=" d-grid mt-2">
          
          <Typography gutterBottom variant="h5" component="div">
          Play store
        </Typography>
          <Typography variant="body2" >
          Aplicación de venta de aplicaciones diferentes
        </Typography>
          <Button variant="contained" >Github</Button>

          <Button variant="contained" href='https://www.mediafire.com/file/yz73r03r0a3qkc4/app-store.apk/file' download>Download </Button>
        </CardContent>
      </Card>
      <Card className="  p-3 text-center m-2 d-grid justify-content-center " elevation={10} sx={{bgcolor: 'secondary.main',maxWidth: 260 }} >
        {/* <img src="./img/proyects/bodega.jpeg" style={{ width: "220px" }} class="card-img-top" alt="..." /> */}
        <CarrouselComponent images={["./img/apps/geofence/1.jpg","./img/apps/geofence/2.jpg","./img/apps/geofence/3.jpg","./img/apps/geofence/4.jpg","./img/apps/geofence/5.jpg","./img/apps/geofence/6.jpg","./img/apps/geofence/7.jpg","./img/apps/geofence/8.jpg"]}></CarrouselComponent>
        <CardContent class=" d-grid mt-2">
          
          <Typography gutterBottom variant="h5" component="div">
          App Geocerca
        </Typography>
          <Typography variant="body2" >
          Aplicación de geocerca que detecta si se encuentra en la zona o no.
        </Typography>
          <Button variant="contained" >Github</Button>

          <Button variant="contained" href='https://www.mediafire.com/file/yz73r03r0a3qkc4/app-store.apk/file' download>Download </Button>
        </CardContent>
      </Card>

      <Card className="  p-3 text-center m-2 d-grid justify-content-center " elevation={10} sx={{bgcolor: 'secondary.main',maxWidth: 260 }} >
        {/* <img src="./img/proyects/bodega.jpeg" style={{ width: "220px" }} class="card-img-top" alt="..." /> */}
        <CarrouselComponent images={["./img/apps/mobilecommerce/1.jpg","./img/apps/mobilecommerce/2.jpg","./img/apps/mobilecommerce/3.jpg","./img/apps/mobilecommerce/4.jpg","./img/apps/mobilecommerce/5.jpg","./img/apps/mobilecommerce/6.jpg","./img/apps/mobilecommerce/7.jpg","./img/apps/mobilecommerce/8.jpg"]}></CarrouselComponent>
        <CardContent class=" d-grid mt-2">
          
          <Typography gutterBottom variant="h5" component="div">
          Ecommerce local
        </Typography>
          <Typography  variant="body2">
          Aplicación para la venta de productos con métodos de pago alternativos
        </Typography>
          <Button variant="contained" >Github</Button>

          <Button variant="contained" href='https://www.mediafire.com/file/va8s8lgahveuryc/appecommerce.apk/file' download>Download </Button>
        </CardContent>
      </Card>
    </div>
  </Paper>
}
export default AppsComponent;
