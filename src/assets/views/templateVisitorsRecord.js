export const templateVisitorsRecord = () => {

    document.getElementById('containervisitors').innerHTML =

        `<nav class="navbar">
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
    <div id=cardbody class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="/assets/img/user-icon.png" class="card-img" alt="...">
        
      </div>
      <div class="col-md-8">
        <div id=cardinfo class="card-body">
          <p class="card-text">Nombre:</p>
          <p class="card-text">Apellidos:</p>
          <p class="card-text">Número celular:</p>
          <p class="card-text">Empresa que visita:</p>
          <p class="card-text">Persona que visita:</p>
          <p class="card-text"><small class="text-muted">Hr entrada:</small></p>
          <p class="card-text"><small class="text-muted">Hr salida:</small></p>
          
        </div>
      </div>
    </div>
  </div>`
};