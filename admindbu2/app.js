firebase.initializeApp({
    apiKey: "AIzaSyCwjIBKcOJM06LBPzQGozQFUgQ396gprkY",
    authDomain: "admindb-80cc3.firebaseapp.com",
    projectId: "admindb-80cc3",
});
  
  // Initialize Firebase
  var db = firebase.firestore();

function agregar(){
    //console.log("Hola llamaste a agregar");

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
        document.getElementById('nombre').value = "";
        document.getElementById('apellido').value = "";
        document.getElementById('edad').value = "";
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

}

tabla = document.getElementById('tabla');

db.collection("miColeccion").onSnapshot((querySnapshot) => {
  tabla.innerHTML = ''; //Limpiar mi tabla
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().last}`);
      tabla.innerHTML += `
      <tr>
          <th scope="row">${doc.id}</th>
          <td>${doc.data().Sunombre}</td>
          <td>${doc.data().Suapellido}</td>
          <td>${doc.data().Suedad}</td>
          <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
          <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().first}','${doc.data().last}','${doc.data().born}')">Editar</button></td>
      </tr>
      `
      });
  });