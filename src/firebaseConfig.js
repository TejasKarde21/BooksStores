// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2P81mgaFsO0Vtl0HncQc5VHPO1GNRCEI",
  authDomain: "bookstore-652cc.firebaseapp.com",
  projectId: "bookstore-652cc",
  storageBucket: "bookstore-652cc.appspot.com",
  messagingSenderId: "706988528942",
  appId: "1:706988528942:web:0ba72b38ceeae84456d6bf",
  measurementId: "G-3S5E0GWLT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider} ;