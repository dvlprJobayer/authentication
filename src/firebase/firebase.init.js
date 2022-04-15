// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYtaiDAYJ3vuIA8y8Zr6ZrOh8Y7Ck1uvI",
    authDomain: "authentication-db370.firebaseapp.com",
    projectId: "authentication-db370",
    storageBucket: "authentication-db370.appspot.com",
    messagingSenderId: "851969907902",
    appId: "1:851969907902:web:edf24f6aeb2026e77d52ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;