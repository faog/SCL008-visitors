
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
        <article id="visitorinfo">   
            <label>Nombre:</label>                     
            <input type="text" id="visitorfirstname" placeholder="Ingresa tu nombre"/>
            <p id="firstnameerror"></p>
            <label>Apellido:</label>                     
            <input type="text" id="visitorlastname" placeholder="Ingresa tu apellido"/>
            <p id="lastnameerror"></p>
            <label>Email:</label>  
            <input type="email" id= "visitoremail" placeholder="Ingresa tu email"/>
            <p id ="emailerror"></p>
            <label>N° Celular:</label>  
            <input type="text" id="visitorphone" placeholder="Ingresa tu n° celular"/>
            <p id ="phoneerror"></p>

            <label for="company">Empresa que visita:</label>
            <select id="company" class="form-control">            
                <option selected>Selecciona una empresa</option> 
            </select>

            <label for="companyperson">Persona que visita:</label>
            <select id="companyperson" class="form-control">
                <option selected>Selecciona...</option>
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