// Import the functions you need from the SDKs you need
//import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmeSq7qLG26udfnC_ssV9io2Cqkm1NjI4",
    authDomain: "vitamines-2d9ef.firebaseapp.com",
    databaseURL: "https://vitamines-2d9ef-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vitamines-2d9ef",
    storageBucket: "vitamines-2d9ef.appspot.com",
    messagingSenderId: "548592613043",
    appId: "1:548592613043:web:6505a897e89a89296e22c6"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
export const auth = firebase.auth();
export const db = app.firestore();