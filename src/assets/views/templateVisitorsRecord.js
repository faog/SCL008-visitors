import { postVisitor } from "../js/datamodel.js";

export const templateVisitorsRecord = () => {

  document.getElementById('containervisitors').innerHTML +=
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
  <h1 id="title">Historial visitantes</h1>
  <article id="visitorcard">

  </article> 

  `
  postVisitor();
}

/*Función que imprime en el html de las fichas de los visitantes*/

export const renderVisitor = async (doc)=>{    
  document.getElementById('visitorcard').innerHTML+= 
  
  `
  <div id="target">
  <div id="userinfo">
  <p><strong>Nombre:</strong> ${doc.data().firstname} ${doc.data().lastname} </p>
  <p><strong>Correo electrónico:</strong> ${doc.data().email}</p>
  <p><strong>Celular: (+56)</strong> ${doc.data().phone}</p>
  <p><strong>Persona que visita:</strong> ${doc.data().companyperson}, ${doc.data().company} </p>
  <p><strong>Hora de Entrada:</strong> ${doc.data().dateentrance.toDate()}</p>
  <p><strong>Hora de Salida:</strong>${doc.data().dateexit.toDate()}</p>
  </div>
  <p class="cardphoto" id="photo_${doc.id.toString()}"></p>
  `
  let imageURL = await firebase.storage().ref(doc.id.toString()+".png").getDownloadURL();
  document.getElementById('photo_' + doc.id.toString()).innerHTML=
  `<img src="${imageURL}"></img>
  </div>
  `
}