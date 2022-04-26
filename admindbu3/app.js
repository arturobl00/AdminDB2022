import { login, logout } from "./auth.js";

//LLamar a los id en una constante
const buttonLogin = document.querySelector("#button-login");
const buttonLogout = document.querySelector("#button-logout");
const userinfo = document.querySelector('#user-info');


let currentUser;
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        currentUser = user;
        console.log("Usuario Logeado como: ", currentUser.displayName, user.email, currentUser.phoneNumber);
        inicio();
        // ...
      } else {
        // User is signed out
        // ...
        console.log("El Usuario Cerro Sesion");
      } 
});


//Listener de los botones
buttonLogin.addEventListener("click", async (e) =>{
    try {
        await login();
    } catch (error) {
        
    }
});

buttonLogout.addEventListener("click", async (e) =>{
    logout();
    cerrar();
});

function inicio(){
    document.getElementById('button-logout').style.display = 'block';
    document.getElementById('button-login').style.display = 'none';
    document.getElementById('todo-form').style.display = 'block';

    //Agregar el formulario

    userinfo.innerHTML = `
    </br>
    <h3 class="display-6">Bienvenidos a su lista ToDo.</h3>
    </br>
    <img src="${currentUser.photoURL}" width = "40" />
    </br>
    <p>${currentUser.displayName} - ${currentUser.email}</p>
    <input type="text" id="todo-input" placeholder="¿Que quieres hacer hoy?" autocomplite = "off" class="form-control"/>
    `;
}

function cerrar(){
    document.getElementById('button-logout').style.display = 'none';
    document.getElementById('button-login').style.display = 'block';
    document.getElementById('todo-form').style.display = 'none';
}