import { postVisitor } from "../js/datamodel.js";

export const templateVisitorsRecord = () => {

  document.getElementById('containervisitors').innerHTML +=
  `
  <h1>Información usuario</h1>
  <article id="visitorcard">

  </article> 

  `
  postVisitor();
}

/*Función que imprime en el html de las fichas de los visitantes*/

export const renderVisitor = async (doc)=>{    
  document.getElementById('visitorcard').innerHTML+= 
  
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
  <div id="target">
  <p>Nombre: ${doc.data().firstname} ${doc.data().lastname} </p>
  <p>Correo electrónico: ${doc.data().email}</p>
  <p>Celular: (+56) ${doc.data().phone}</p>
  <p>Persona que visita: ${doc.data().companyperson}, ${doc.data().company} </p>
  <p>Hora de Entrada: ${doc.data().dateentrance.toDate()}</p>
  <p>Hora de Salida:${doc.data().dateexit.toDate()}</p>
  <p class="cardphoto" id="photo_${doc.id.toString()}"></p>
  `
  let imageURL = await firebase.storage().ref(doc.id.toString()+".png").getDownloadURL();
  document.getElementById('photo_' + doc.id.toString()).innerHTML=
  `<img src="${imageURL}"></img>
  </div>
  `
}