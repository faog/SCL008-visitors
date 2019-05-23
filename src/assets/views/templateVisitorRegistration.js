
import {getCompanies, visitorCreate } from '../js/datamodel.js';
import {validateEmail} from '../js/validate.js';
//Falta aplicar css

export const templateVisitorRegistration = () =>{
    
    document.getElementById('containervisitors').innerHTML=    
    `<nav class="navbar">
      <a class="navbar-brand" href="#">
       <img src="./assets/img/come-inc.png" width="30" height="30" class="d-inline-block align-top" alt="">
        PaseNoma'
      </a>
    </nav>
    <div class="templatevisitors">
        <h1>Registro de visitantes</h1>
        <h5>Por favor, complete el siguiente formulario:</h5>
        <article id="visitorinfo">   
            <input type="text" id="visitorfirstname" class="form-control" placeholder="Nombre"/>
            <p id="firstnameerror"></p>                                 
            <input type="text" id="visitorlastname" class="form-control" placeholder="Apellidos"/>
            <p id="lastnameerror"></p>             
            <input type="email" id= "visitoremail" class="form-control" placeholder="Correo electrónico"/>
            <p id ="emailerror"></p>              
            <input type="text" id="visitorphone" class="form-control" placeholder="Número celular"/>
            <p id ="phoneerror"></p>

            <select id="company" class="form-control">            
                <option selected>Seleccione la empresa que visita</option> 
            </select>
            
            <select id="companyperson" class="form-control">
                <option selected>Seleccione la persona que visita</option>
            </select>
            <button id="registration">Registrarse</button>        
        </article>            
    </div>
    `;    
    
    getCompanies();

    document.getElementById('registration').addEventListener('click',()=>{
        let visitorFirstName = document.getElementById('visitorfirstname').value;
        let visitorLastName = document.getElementById('visitorlastname').value;
        let visitorEmail = document.getElementById('visitoremail').value;
        let visitorPhone = document.getElementById('visitorphone').value;
        let company = document.getElementById('company');
        let companyName = company.options[company.selectedIndex].text;
        let companyPerson = document.getElementById('companyperson').value;

    /*IMPRESION VÁLIDACIONES EN EL DOM*/
    if (visitorFirstName===""){
        document.getElementById('firstnameerror').innerHTML=`*Debes ingresar un nombre.`;      
    }else{
        document.getElementById('firstnameerror').innerHTML='';
    }
    
    if (visitorLastName===""){
        document.getElementById('lastnameerror').innerHTML=`*Debes ingresar un apellido.`;
    }else{
        document.getElementById('lastnameerror').innerHTML='';
    } 
    
    if(visitorEmail==="" || !validateEmail(visitorEmail)){
        document.getElementById('emailerror').innerHTML=`*Debes ingresar un correo válido.`;
    }else{
        document.getElementById('emailerror').innerHTML='';
    }  

    if(visitorPhone==="" || visitorPhone.length<9 || visitorPhone.length>9){
        document.getElementById('phoneerror').innerHTML=`*Debes ingresar un número de telefono.`;
    }else{
        document.getElementById('phoneerror').innerHTML='';
    }  

        visitorCreate(visitorFirstName, visitorLastName, visitorEmail, visitorPhone, companyName, companyPerson);
    })

    

}