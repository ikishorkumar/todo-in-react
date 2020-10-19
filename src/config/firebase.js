import * as firebase from 'firebase/app';
import "firebase/database";
import "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyDLw8Y3Ksjn4I1PB1tz-PGho3OdSLnj-N8",
    authDomain: "todo-app-in-react--js.firebaseapp.com",
    databaseURL: "https://todo-app-in-react--js.firebaseio.com",
    projectId: "todo-app-in-react--js",
    storageBucket: "todo-app-in-react--js.appspot.com",
    messagingSenderId: "589855479103",
    appId: "1:589855479103:web:90644b05dd649d804c6f8a",
    measurementId: "G-VVC0WQGP5G"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);

   