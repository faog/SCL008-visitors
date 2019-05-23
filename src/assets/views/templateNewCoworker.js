export const templateNewCoworker = () => {

    document.getElementById('containervisitors').innerHTML =
        `<nav class="navbar">
      <a class="navbar-brand" href="#">
        <img src="./assets/img/come-inc.png" width="30" height="30" class="d-inline-block align-top" alt="">
        PaseNoma'
      </a>
      <li>

    <a id="newregister">Nuevo Registro</a>
    <a id="visitorsrecord">Historial de Visitantes</a>
    <a id="statistics">Estadisticas</a>
</li>
     </nav>
    <div class="templatevisitors">
        <article id="visitorinfo">   
            <input type="text" id="coworkerfirstname" class="form-control" placeholder="Ingresa nombre"/>
            <p id="firstnamealert"></p>
            <input type="text" id="coworkerlastname"class="form-control"  placeholder="Ingresa apellido"/>
            <p id="lastnamealert"></p>
            <input type="email" id= "coworkeremail" class="form-control" placeholder="Ingresa email"/>
            <p id ="emailalert"></p>
            <input type="text" id="coworkerphone" class="form-control" placeholder="Ingresa n°de celular"/>
            <p id ="phonealert"></p>
            <select id="inputstate" class="form-control">            
            <option selected>Selecciona...</option>
            <option>compañia 1</option>  
            <option>compañia 2</option>
            <option>compañia 3</option> 
            <button id="registration">Registrarse</button>  
        </article> 
    </div>
    `;
}