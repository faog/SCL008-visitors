
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



