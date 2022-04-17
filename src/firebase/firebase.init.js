import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDb43P4Ipl5shU1w6_tb2-J8DxAD-EP7ME",
    authDomain: "authentication-6a3c1.firebaseapp.com",
    projectId: "authentication-6a3c1",
    storageBucket: "authentication-6a3c1.appspot.com",
    messagingSenderId: "342152608974",
    appId: "1:342152608974:web:653ea9244f11d02f78e49f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;