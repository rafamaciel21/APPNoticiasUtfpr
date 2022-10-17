import firebase from "firebase/app";
import 'firebase/database';
require('firebase/auth');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyC6SiGwhIW-SS4QGrBXnuaoBb6NdCQX8dc",
  authDomain: "apputfprnoticiasteste.firebaseapp.com",
  databaseURL: "https://apputfprnoticiasteste-default-rtdb.firebaseio.com",
  projectId: "apputfprnoticiasteste",
  storageBucket: "apputfprnoticiasteste.appspot.com",
  messagingSenderId: "552052629415",
  appId: "1:552052629415:web:eaf0b7b37706496ea02082",
  measurementId: "G-SDH8HKTVTS"
};

// Initialize Firebase
//firebase.authDomaininitializeApp(firebaseConfig);


// deixando apenas um aplicativo conectar ou abrir uma conexão
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;