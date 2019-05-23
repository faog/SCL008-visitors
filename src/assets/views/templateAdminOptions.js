export const templateAdminOptions = () => {

    document.getElementById('containervisitors').innerHTML =
        `
    <div class="templatesession">
        <button id="newregister">Nuevo Registro</button>   
        <button id="visitorsrecord">Historial de Visitantes</button>   
        <button id="statistics">Estadisticas</button>             
    </div>
    `;
}