export const templateStatistics = () => {

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
              <a class="nav-link" href="#/visitorsrecord">Historial de visitantes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/statistics">Estadisticas</a>
            </li>						
          </ul>
        </div>
      </nav> 
      <article id="infomessage"> 
          <h1>Página en construcción...</h1>
          <img src="./assets/img/idea.png"  alt="inConstruction">
      <article/>    
    `
};