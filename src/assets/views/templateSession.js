import {templateVisitorRegistration} from './templateVisitorRegistration.js';

export const templateSession = () => {

    document.getElementById('containervisitors').innerHTML =
    `
    <div class="templateSession">
        <button id="administration">Administador</button>   
        <button id="visit">Visitante</button>               
    </div>
    `
    document.getElementById('visit').addEventListener('click',()=>{
        templateVisitorRegistration();
    })
};