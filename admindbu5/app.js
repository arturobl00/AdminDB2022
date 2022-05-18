 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCzQrQGynZc3hNPASHEgB3xqnaxoNtLUg4",
   authDomain: "unidad5-a8cfa.firebaseapp.com",
   projectId: "unidad5-a8cfa",
   storageBucket: "unidad5-a8cfa.appspot.com",
   messagingSenderId: "1061900390671",
   appId: "1:1061900390671:web:bf325b662869da446fee7a"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

  document.getElementById('file').addEventListener('change', (event) =>{
    console.log("Hola");
    const file = event.target.files[0];
    const storageRef = app.storage().ref('images/'+file.name);
    storageRef.put(file);
  });