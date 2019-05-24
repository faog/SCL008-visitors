import { templateNewCoworker } from './templateNewCoworker.js';
import { templateVisitorsRecord } from './templateVisitorsRecord.js';
import { templateStatistics } from './templateStatistics.js';

export const templateAdminOptions = () => {

    document.getElementById('containervisitors').innerHTML =
    `
    <nav class="navbar">
        <a class="navbar-brand" href="#">
            <img src="./assets/img/come-inc.png" width="30" height="30" class="d-inline-block align-top" alt="Logo">
            PaseNoma'
        </a>
    </nav>

    <div class="templateadmin">
        <h2>Bienvenido administrador</h2>
        <p>Elija una opción:</p>
        <button id="newregister">Nuevo Registro</button>   
        <button id="visitorsrecord">Historial de Visitantes</button>   
        <button id="statistics">Estadisticas</button>             
    </div>
    `;

    document.getElementById('newregister').addEventListener('click', () => {
        templateNewCoworker();
        window.location.hash = "#/newregister"
    })

    document.getElementById('visitorsrecord').addEventListener('click', () => {
        templateVisitorsRecord();
        window.location.hash = "#/visitorsrecord"
    })

    document.getElementById('statistics').addEventListener('click', () => {
        templateStatistics();
        window.location.hash = "#/statistics"
    })
};