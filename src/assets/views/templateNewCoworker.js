import {coworkerCreate, getCompanies} from '../js/datamodel.js';
import {validateEmail, validatePhone} from '../js/validate.js';

export const templateNewCoworker = () => {

    document.getElementById('containervisitors').innerHTML =
    `
    <nav class="navbar">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
      </button>

      <a class="navbar-brand" href="#">
        <img src="./assets/img/come-inc.png" width="30" height="30" class="d-inline-block align-top" alt="logo">
        PaseNoma'
      </a>
    
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <a class="nav-link" href="#/newregister">Nuevo registro</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/visitorshistory">Historial de visitantes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/statics">Estadisticas</a>
          </li>						
        </ul>
      </div>
    </nav>
    <div class="templatevisitors">
        <article id="visitorinfo"> 
          <h1>Registro de empleados</h1>
            <input type="text" id="coworkerfirstname" class="form-control" placeholder="Nombre"/>
            <p id="firstnamealert"></p>
            <input type="text" id="coworkerlastname"class="form-control"  placeholder="Apellidos"/>
            <p id="lastnamealert"></p>
            <input type="email" id= "coworkeremail" class="form-control" placeholder="Correo electrónico"/>
            <p id ="emailalert"></p>
            <input type="text" id="coworkerphone" class="form-control" placeholder="Número de celular"/>
            <p id ="phonealert"></p>
            <select id="company" class="form-control">            
              <option selected>Empresa que pertenece</option>
            </select>
            <button id="registrationcowork">Registrar</button>  
        </article> 
    </div>
    `;
    getCompanies("Empresa que pertenece");
    document.getElementById('registrationcowork').addEventListener('click',()=>{
      let coworkerFirstName = document.getElementById('coworkerfirstname').value;
      let coworkerLastName = document.getElementById('coworkerlastname').value;
      let coworkerEmail = document.getElementById('coworkeremail').value;
      let coworkerPhone = document.getElementById('coworkerphone').value;
      let coworkerCompany = document.getElementById('company').value;
      

  /*IMPRESION VÁLIDACIONES EN EL DOM*/
  if (coworkerFirstName===""){
      document.getElementById('firstnamealert').innerHTML=`*Debes ingresar un nombre.`;      
  }else{
      document.getElementById('firstnamealert').innerHTML='';
  }
  
  if (coworkerLastName===""){
      document.getElementById('lastnamealert').innerHTML=`*Debes ingresar un apellido.`;
  }else{
      document.getElementById('lastnamealert').innerHTML='';
  } 
  
  if(coworkerEmail==="" || !validateEmail(coworkerEmail)){
      document.getElementById('emailalert').innerHTML=`*Debes ingresar un correo válido.`;
  }else{
      document.getElementById('emailalert').innerHTML='';
  }  

  if(coworkerPhone==="" || !validatePhone(coworkerPhone) || coworkerPhone.length!=9){
      document.getElementById('phonealert').innerHTML=`*Debes ingresar un número de telefono.`;
  }else{
      document.getElementById('phonealert').innerHTML='';
  }  

  coworkerCreate(coworkerFirstName, coworkerLastName, coworkerEmail, coworkerPhone, coworkerCompany);
  })  

}