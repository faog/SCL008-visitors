import { postVisitor } from "../js/datamodel.js";

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
              <a class="nav-link" href="#/visitorsrecord">Historial de visitantes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/statistics">Estadisticas</a>
            </li>						
          </ul>
        </div>
      </nav> 
      
  <div id='cardinfo'> 
  </div>`
    postVisitor();
};

export const renderVisitor = async(doc) => {
    document.getElementById("cardinfo").innerHTML +=
        `
    <div>
  <p >Nombre:${doc.data().firstname}</p>
  <p >Apellidos:${doc.data().lastname}</p>
  <p >Número celular:${doc.data().phone}</p>
  <p >Empresa que visita:${doc.data().company}</p>
  <p >Persona que visita:${doc.data().companyperson}</p>
  <p ><small class="text-muted">Hr entrada:${doc.data().dateentrance.toDate()}</small></p>
  <p ><small class="text-muted">Hr salida:${doc.data().dateexit.toDate()}</small></p>
  </div>
  `
}