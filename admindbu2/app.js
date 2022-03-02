firebase.initializeApp({
    apiKey: "AIzaSyCwjIBKcOJM06LBPzQGozQFUgQ396gprkY",
    authDomain: "admindb-80cc3.firebaseapp.com",
    projectId: "admindb-80cc3",
});
  
  // Initialize Firebase
  var db = firebase.firestore();

function agregar(){
    console.log("Hola llamaste a agregar");

    var nom = document.getElementById('nombre').value;
    var apell = document.getElementById('apellido').value;
    var ed = document.getElementById('edad').value;

    db.collection("miColeccion").add({
        Sunombre: nom,
        Suapellido: apell,
        Suedad: ed
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

}