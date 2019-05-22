export const initFirebase = () => {

    // Initialize Firebase
    let config = {
        apiKey: "AIzaSyCbUSBrLqcdn4paWBUfG33TuvBNrxUQYUQ",
        authDomain: "visitors-hackathon.firebaseapp.com",
        databaseURL: "https://visitors-hackathon.firebaseio.com",
        projectId: "visitors-hackathon",
        storageBucket: "visitors-hackathon.appspot.com",
        messagingSenderId: "83010117216",
        appId: "1:83010117216:web:04d81bafc5dd18d8"
    };
    firebase.initializeApp(config);
    
    // Initialize Cloud Firestore through Firebase
    return firebase.firestore();
}