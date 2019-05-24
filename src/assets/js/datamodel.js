import { validateRegistration, validateNew } from './validate.js';
import { renderVisitor } from '../views/templateVisitorsRecord.js'

//Funcion para traerse la informacion de la compañia y llenar el selector company
export const getCompanies = (defaultoption) => {
    let dbCompany = firebase.firestore();
    dbCompany.collection("company").orderBy("companyName", "asc").get()
        .then((querySnapshot) => {
            let selectCompany = document.getElementById('company');
            selectCompany.innerHTML = `<option selected>${defaultoption}</option>`
            querySnapshot.forEach((doc) => {
                selectCompany.innerHTML +=
                    `
            <option value="${doc.id}">${doc.data().companyName}</option>
            `
            });
            selectCompany.addEventListener('change', () => {
                getPersonCompany(selectCompany.value);
            })
        });
}

//Funcion que permite traerse la información de la persona asociada a una compañia

export const getPersonCompany = (id) => {
    let dbCompany = firebase.firestore();
    dbCompany.collection("coworker").where("company", "==", id).get()
        .then((querySnapshot) => {
            let selectPersonCompany = document.getElementById('companyperson');
            selectPersonCompany.innerHTML =
                `
        <option selected>Seleccione la persona que visita</option>
        `
            querySnapshot.forEach((coworker) => {
                selectPersonCompany.innerHTML +=
                    `
            <option value="${coworker.id}">${coworker.data().firstname} ${coworker.data().lastname}</option>
            `
            })
        })
}

/*Función que permite crear un visitante */
export const visitorCreate = (visitorFirstName, visitorLastName, visitorEmail, visitorPhone, companyName, companyPerson, companyPersonId, photo) => {
    let dbVisitor = firebase.firestore();
    if (validateRegistration(visitorFirstName, visitorLastName, visitorEmail, visitorPhone)) {
        let dateEntrance = new Date();
        let dateExit = new Date();
        //Sumar 1 hora 
        dateExit.setHours(dateEntrance.getHours() + 1);

        dbVisitor.collection("visitors").add({
                firstname: visitorFirstName,
                lastname: visitorLastName,
                email: visitorEmail,
                phone: visitorPhone,
                company: companyName,
                companyperson: companyPerson,
                companypersonid: companyPersonId,
                dateentrance: dateEntrance,
                dateexit: dateExit
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                alert('Visita Ingresada');
                //Guardar foto en Firebase Storage
                let ref = firebase.storage().ref();
                let filename = docRef.id.toString() + ".png";
                let photoRef = ref.child(filename);
                photoRef.put(photo).then(function(snapshot) {
                    alert('foto subida');
                    cleanViewVisitors();
                    window.location.hash = "#/visitor";
                }).catch((error) => {
                    console.log(error);
                });
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    } else {
        return "error en la validación del input vacío";
    }
}

export const cleanViewVisitors = () => {
    document.getElementById('visitorfirstname').value = '';
    document.getElementById('visitorlastname').value = '';
    document.getElementById('visitoremail').value = '';
    document.getElementById('visitorphone').value = '';
    document.getElementById('company').value = 'Seleccione la empresa que visita';
    document.getElementById('companyperson').value = 'Seleccione la persona que visita';
}

/*Función que permite crear un empleado */
export const coworkerCreate = (coworkerFirstName, coworkerLastName, coworkerEmail, coworkerPhone, coworkerCompany) => {
    let dbCoWorker = firebase.firestore();
    if (validateNew(coworkerFirstName, coworkerLastName, coworkerEmail, coworkerPhone, coworkerCompany)) {
        dbCoWorker.collection("coworker").add({
                firstname: coworkerFirstName,
                lastname: coworkerLastName,
                email: coworkerEmail,
                phone: coworkerPhone,
                company: coworkerCompany
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                alert('Empleado registrado');
                cleanViewCoworker();
                window.location.hash = "#/newregister";
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    } else {
        return "error en la validación del input vacío";
    }
}

export const cleanViewCoworker = () => {
    document.getElementById('coworkerfirstname').value = '';
    document.getElementById('coworkerlastname').value = '';
    document.getElementById('coworkeremail').value = '';
    document.getElementById('coworkerphone').value = '';
    document.getElementById('company').value = 'Empresa que pertenece';
}

export const postVisitor = () =>{
    let dbvisitors = firebase.firestore();
    dbvisitors.collection("visitors").orderBy("dateentrance","desc").get()
    .then((querySnapshot) => {
        if(document.getElementById('visitorcard')){
            document.getElementById('visitorcard').innerHTML = '';
        }
        querySnapshot.forEach((doc) => {
            renderVisitor(doc);
        });      
    });
}