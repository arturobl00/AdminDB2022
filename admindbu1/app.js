function registrar(){
    //console.log("Esto funciona")
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;

    firebase.auth().createUserWithEmailAndPassword(email, pass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("Usuario Registrado")
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode," Codigo de Error")
    console.log(errorMessage)
    // ..
  });
}


function login(){
  var email1 = document.getElementById('email1').value;
  var pass1 = document.getElementById('pass1').value;

    firebase.auth().signInWithEmailAndPassword(email1, pass1)
  .then((userCredential) => {
    // Signed in
    console.log("Usuario inicio Sesion")
    logeado()
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode," Codigo de Error")
    console.log(errorMessage)
    // ..
  });
}

function logeado(){
  var uno = document.getElementById('miBoton');
  //uno.innerHTML = 'LogOut';
  uno.innerHTML = `<button class="btn btn-danger btn-lg" type="button" onclick="cerrar()">LogOut</button>`
}

function cerrar(){
  firebase.auth().signOut().then(() => {
    console.log("Sesion Cerrada");
    restaurar();
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode," Codigo de Error")
    console.log(errorMessage)
  });
}

function restaurar(){
  var uno1 = document.getElementById('miBoton');
  uno1.innerHTML = `<button class="btn btn-primary btn-lg" 
  type="button" onclick="login()">Login</button>` 
}