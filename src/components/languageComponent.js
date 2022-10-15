
import React, { useState } from 'react';
const LanguageComponent = ()=>{
    const lista = ["python","angular","csharp","css","dart","git","github"
,"js","html","php","react","springboot","flutter","firebase","nodejs","java","adobexd","laravel"];
    
    return <div>
    <div class="text-center"><h2>Habilidades</h2></div>
        <div>
        <div class="" >
  
  <div class="card-body d-flex flex-wrap justify-content-center">
    
    {lista.map(list=>{
       return  <img src={"./img/languages/"+list+".png"} key={list} style={{width:"120px"}} className="card-img-top" alt="..."/>
    })}
    
    
  </div>
</div>
        </div>
    </div>
}
export default LanguageComponent;