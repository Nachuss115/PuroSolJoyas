import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//.........................COMENTADO...............................
// Esto se modifica si usan su firebase copian y pegan su propio proyecto de firebase
const firebaseConfig = {
    apiKey: "AIzaSyCHvQJBV5iWHMBT7Qu3HEo2xvXedKfZkio",
    authDomain: "purosoljoyas-18749.firebaseapp.com",
    projectId: "purosoljoyas-18749",
    storageBucket: "purosoljoyas-18749.appspot.com",
    messagingSenderId: "563734230344",
    appId: "1:563734230344:web:0b03be35b2c2f0e2976f7d",
    measurementId: "G-S8WS3VRMSS"
  };
// ............................COMENTADO...................
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}