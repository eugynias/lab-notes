import firebase from "firebase";
import "firebase/auth";

const config =firebase.initializeApp({
    apiKey: "AIzaSyADj8GZYyiTQ-C6DV93jEWBjVjvw-jsxKY",
    authDomain: "notes-a8d30.firebaseapp.com",
    databaseURL: "https://notes-a8d30.firebaseio.com",
    projectId: "notes-a8d30",
    storageBucket: "notes-a8d30.appspot.com",
    messagingSenderId: "439565792326",
    appId: "1:439565792326:web:e4c9bd5aa10f2bc2cb0647"
})

export default config;