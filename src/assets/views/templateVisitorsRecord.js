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
  
  `
  <div class="card">
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