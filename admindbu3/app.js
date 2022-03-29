import { login, logout } from "./auth.js";

//LLamar a los id en una constante
const buttonLogin = document.querySelector("#button-login");
const buttonLogout = document.querySelector("#button-logout");


let currentUser;
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        currentUser = user;
        console.log("Usuario Logeado como: ", currentUser.displayName, user.email, currentUser.phoneNumber)
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
});