import firebase from 'firebase/app';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBt9nIXk84bmAtBb1fj_1h4V2_w5aQSMMg",
    authDomain: "aprendiendo-react-503ed.firebaseapp.com",
    projectId: "aprendiendo-react-503ed",
    storageBucket: "aprendiendo-react-503ed.appspot.com",
    messagingSenderId: "1099015984024",
    appId: "1:1099015984024:web:13e53d4e495c33746491ed"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  
  const auth = fire.auth();
  export {auth}