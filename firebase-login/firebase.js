// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_2Ed3h3_NC7JR2CtDW0xkDeZfco84Mus",
  authDomain: "my-project-1532012899727.firebaseapp.com",
  projectId: "my-project-1532012899727",
  storageBucket: "my-project-1532012899727.appspot.com",
  messagingSenderId: "1079221415789",
  appId: "1:1079221415789:web:008fc6ce1ec3d7c0f1b464",
  measurementId: "G-4C1NTTW7VR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
var provider = new GoogleAuthProvider();  
export {auth , provider};
