var firebaseConfig = {
  apiKey: "AIzaSyDvMTIiwhqMv4Yj6R6nJ16i7oecvc0bwhg",
  authDomain: "dbchat-dbdf7.firebaseapp.com",
  databaseURL: "https://dbchat-dbdf7-default-rtdb.firebaseio.com",
  projectId: "dbchat-dbdf7",
  storageBucket: "dbchat-dbdf7.appspot.com",
  messagingSenderId: "46054339704",
  appId: "1:46054339704:web:7c9e20b082773b7e28e98d"
};

firebase.initializeApp(firebaseConfig);

//Obtener datos de los id
var txtUsuario = document.getElementById("usuario");
var txtMensaje = document.getElementById("mensaje");
var btnEnviar = document.getElementById("btnenviar");
var chatLista = document.getElementById("chatlista");
var html1 = "";

//Leer los Datos desde mi base
firebase.database().ref('chat').on('value', (snapshot) =>{
  html1 = "";  
  snapshot.forEach(function (e){
      var elemento = e.val();
      var usuario1 = elemento.user;
      var mensaje1 = elemento.messege;
      html1 += "<li>"+usuario1+" dice: "+mensaje1+"</li>";
  })
  chatLista.innerHTML = html1;
});

btnEnviar.addEventListener("click", function(){
  //console.log(txtUsuario.value, txtMensaje.value);
  var usuario = txtUsuario.value;
  var mensaje = txtMensaje.value;
  var html = "<li>"+usuario+" dice: "+mensaje+"</li>";
  
  chatLista.innerHTML += html;

  //Agregar datos a la base
  firebase.database().ref('chat').push({
      user: usuario,
      messege: mensaje
  })
});



