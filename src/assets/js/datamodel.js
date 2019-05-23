
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
        <option selected>Selecciona...</option>
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

        window.location.hash="#/visitor";
        document.getElementById('visitorfirstname').value='';
        document.getElementById('visitorlastname').value='';
        document.getElementById('visitoremail').value='';
        document.getElementById('visitorphone').value='';
        document.getElementById('company').value='Selecciona una empresa';
        document.getElementById('companyperson').value='Selecciona...';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}


