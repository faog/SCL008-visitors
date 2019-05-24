import {validateRegistration, validateNew} from'./validate.js';

//Funcion para traerse la informacion de la compañia y llenar el selector company
export const getCompanies = () =>{
    let dbCompany = firebase.firestore();
    dbCompany.collection("company").orderBy("companyName","asc").get()
    .then((querySnapshot) => {
        let selectCompany=document.getElementById('company');
        querySnapshot.forEach((doc) => {
            selectCompany.innerHTML+=
            `
            <option value="${doc.id}">${doc.data().companyName}</option>
            `
        });
        selectCompany.addEventListener('change',()=>{
            getPersonCompany(selectCompany.value);
        })
    });
}

//Funcion que permite traerse la información de la persona asociada a una compañia

export const getPersonCompany = (id) =>{
    let dbCompany = firebase.firestore();
    dbCompany.collection("company").doc(id).get()
    .then((company)=>{
        let selectPersonCompany=document.getElementById('companyperson');
        selectPersonCompany.innerHTML=
        `
        <option selected>Seleccione la empresa que visita</option>
        `
        company.data().persons.forEach((person)=>{            
            selectPersonCompany.innerHTML+=
            `
            <option value="${person}">${person}</option>
            `
        })
    })
}

/*Función que permite crear un visitante */
export const visitorCreate = (visitorFirstName, visitorLastName, visitorEmail, visitorPhone, companyName, companyPerson) =>{
    let dbVisitor = firebase.firestore(); 
    if(validateRegistration(visitorFirstName, visitorLastName, visitorEmail, visitorPhone)){   
        let dateEntrance = new Date();
        let dateExit = new Date() ;
        //Sumar 1 hora 
        dateExit.setHours(dateEntrance.getHours()+1);

        dbVisitor.collection("visitors").add({
            firstname: visitorFirstName,
            lastname: visitorLastName,
            email: visitorEmail,
            phone: visitorPhone,
            company: companyName,
            companyperson: companyPerson,
            dateentrance:dateEntrance,
            dateexit:dateExit
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            alert('Visita Ingresada');
            cleanViewVisitors();
            window.location.hash="#/visitor";
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }else{
        return "error en la validación del input vacío";
    }
}

export const cleanViewVisitors = () =>{
    document.getElementById('visitorfirstname').value='';
    document.getElementById('visitorlastname').value='';
    document.getElementById('visitoremail').value='';
    document.getElementById('visitorphone').value='';
    document.getElementById('company').value='Seleccione la empresa que visita';
    document.getElementById('companyperson').value='Seleccione la persona que visita';
}

/*Función que permite crear un empleado */
export const coworkerCreate = (coworkerFirstName, coworkerLastName, coworkerEmail, coworkerPhone, coworkerCompany) =>{
    let dbCoWorker = firebase.firestore(); 
    if(validateNew(coworkerFirstName, coworkerLastName, coworkerEmail, coworkerPhone, coworkerCompany)){   
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
            window.location.hash="#/newregister";
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }else{
        return "error en la validación del input vacío";
    }
}
