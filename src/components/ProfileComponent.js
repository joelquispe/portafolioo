import { Typography } from "@mui/material";
import { Redirect } from "react-router-dom";
const ProfileComponent = ()=>{
    return <div class="d-flex justify-content-center">
    <div class="p-3 d-grid align-content-center"> 
    <img src={"./img/profile.jpg"}  style={{width:"200px",borderRadius: "30px"}} className="card-img-top" alt="..."/></div>
    <div class="p-3 w-50 d-grid align-content-center">
        
        <Typography variant="h4" sx={{mb:2}}>Joel Sosaya Quispe</Typography>
        <Typography>Saludos soy desarrollador mobile y web, tengo experiencia trabajando en desarrollo y mantenimiento de aplicaciones en empresa 
        y freelance, me apasiona la programación aprendi de forma autodidacta y en el instituto que estoy actualmente.</Typography>
        

        <div>
        <h2>Redes:</h2>
        <div class="d-flex justify-content-between">
            <div>
            <h4>Personal</h4>
            <div >
                
               <a href="https://www.facebook.com/joelalexander.sosayaquispe.3"><img src={"./img/social/facebook.png"} style={{width:"30px",borderRadius: "30px"}}/></a>
                <a ><img src={"./img/social/instagram.png"} style={{width:"30px",borderRadius: "30px"}}/></a>
                <a href="https://twitter.com/JoelSosaya"><img src={"./img/social/twitter.png"} style={{width:"30px",borderRadius: "30px"}}/></a>
            </div>
            </div>
            
            <div>
            <h4>Página</h4>
            <div >
                <a href="https://www.facebook.com/DeveloperSSTeam"><img src={"./img/social/facebook.png"} style={{width:"30px",borderRadius: "30px"}}/></a>
                <a href="https://www.youtube.com/channel/UCj2FWnuPMQDm4Rg9z_1mPoA"><img src={"./img/social/youtubepng.png"} style={{width:"30px",borderRadius: "30px"}}/></a>
                <a href="https://twitter.com/developerrss"><img src={"./img/social/twitter.png"} style={{width:"30px",borderRadius: "30px"}}/></a>
                <a href=""><img src={"./img/social/discord.png"} style={{width:"30px",borderRadius: "30px"}}/></a>
            </div>
            </div>
            
        </div>
    </div>
    </div>
    
       
    </div>
}

export default ProfileComponent;