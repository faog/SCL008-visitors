
//Funcion para traerse la informacion de la compañia y llenar el selector company
export const postCompany = () =>{
    let dbPost = firebase.firestore();
    dbPost.collection("company").orderBy("companyName","asc").get()
    .then((querySnapshot) => {
        let selectCompany=document.getElementById('company');
        querySnapshot.forEach((doc) => {
            selectCompany.innerHTML+=
            `
            <option value="${doc.data().companyName}">${doc.data().companyName}</option>
            `
        });
    });
}


