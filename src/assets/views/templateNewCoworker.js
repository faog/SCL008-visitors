export const templateNewCoworker = () => {

    document.getElementById('containervisitors').innerHTML =
    `
    <nav class="navbar">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">----</span>
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