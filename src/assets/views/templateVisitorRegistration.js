
import {getCompanies, visitorCreate } from '../js/datamodel.js';
import {validateEmail, validatePhone} from '../js/validate.js';


export const templateVisitorRegistration = () =>{
    
    document.getElementById('containervisitors').innerHTML=    
    `<nav class="navbar">
        <a class="navbar-brand" href="#">
        <img src="./assets/img/come-inc.png" width="30" height="30" class="d-inline-block align-top" alt="logo">
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
            <button id="photo" data-toggle="modal" data-target="#modalphoto">Tomar fotografía</button>
            <button id="registration">Registrarse</button>        
        </article>            
    </div>

    <div class="modal" id="modalphoto" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Fotografía</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- Video desde la Webcam -->
                <video id="video" playsinline autoplay class="row border"></video>
                <!-- Tomar foto -->
                <button id="takephoto">Tomar fotografía</button>
                <!-- Vista previa -->
                <canvas id="canvas" width="320" height="200" class="row border"></canvas>
            </div>
            <div class="modal-footer">
                <button type="button" id="closephoto" data-dismiss="modal">Cerrar</button>
            </div>
            </div>
        </div>
    </div>
    `;    
    
    getCompanies("Seleccione la empresa que visita");

    document.getElementById('registration').addEventListener('click',()=>{
        let visitorFirstName = document.getElementById('visitorfirstname').value;
        let visitorLastName = document.getElementById('visitorlastname').value;
        let visitorEmail = document.getElementById('visitoremail').value;
        let visitorPhone = document.getElementById('visitorphone').value;
        let company = document.getElementById('company');
        let companyName = company.options[company.selectedIndex].text;
        let companyPersonSelect = document.getElementById('companyperson');
        let companyPerson = companyPersonSelect.options[companyPersonSelect.selectedIndex].text;
        let companyPersonId = companyPersonSelect.value;

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

        if(visitorPhone==="" || !validatePhone(visitorPhone) || visitorPhone.length!=9){
            document.getElementById('phoneerror').innerHTML=`*Debes ingresar nueve dígitos.`;
        }else{
            document.getElementById('phoneerror').innerHTML='';
        }  

        //Rescatar contenido del canvas de la foto a un blob
        document.getElementById("canvas").toBlob((photoblob)=>{
            visitorCreate(visitorFirstName, visitorLastName, visitorEmail, visitorPhone, companyName, companyPerson,companyPersonId,photoblob);
        })      

    })

    //1) Abrir la camara e inicializar la captura al momento de abrir el modal (crea el video con la camara)
    document.getElementById('photo').addEventListener('click',()=>{
        const video = document.getElementById('video');
        const canvas = document.getElementById('canvas'); //Caja de la foto capturada
        let context = canvas.getContext('2d'); //permite dibujar elementos 2d
        
        const constraints = {
            audio: false,
            video: {
            width: 320, height: 200
            }
        };
        navigator.mediaDevices.getUserMedia(constraints).then((stream)=>{ //abrir la camara
            window.stream = stream;
            video.srcObject = stream; //toma la data de la camara y lo conecta con el elemento video
            document.getElementById("takephoto").addEventListener('click',()=>{
                context.drawImage(video, 0, 0, 320, 200);  //copia el cuadro del video y lo copia al otro canvas (toma la foto)
            })
        }).catch((error)=>{
            alert('Ha ocurrido un error abriendo la cámara: ' + error)
        });
    });

    //Parar la camara al momento de cerrar el modal
    $('#modalphoto').on('hidden.bs.modal',()=>{
        window.stream.getVideoTracks().forEach((videoTrack)=>{
            videoTrack.stop();    
        });
    })
}