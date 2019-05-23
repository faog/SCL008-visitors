import { templateNewCoworker } from './templateNewCoworker.js';

export const templateAdminOptions = () => {

    document.getElementById('containervisitors').innerHTML =
        `<nav class="navbar">
     <a class="navbar-brand" href="#">
     <img src="./assets/img/come-inc.png" width="30" height="30" class="d-inline-block align-top" alt="">
     PaseNoma'
     </a>
    </nav>
    <div id ="adminmenu">
        <button id="newregister">Nuevo Registro</button>   
        <button id="visitorsrecord">Historial de Visitantes</button>   
        <button id="statistics">Estadisticas</button>             
    </div>
    `;

    document.getElementById('newregister').addEventListener('click', () => {
        templateNewCoworker();
        window.location.hash = "#/newregister"
    })
};