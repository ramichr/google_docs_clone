import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA-Q93q3lY6bDCZ480rzH9eWO3Rfid87PI",
    authDomain: "docs-clone-c1e52.firebaseapp.com",
    projectId: "docs-clone-c1e52",
    storageBucket: "docs-clone-c1e52.appspot.com",
    messagingSenderId: "544069941298",
    appId: "1:544069941298:web:ec637d15d74068c798a42b"
};

const app = !firebase.apps.length ? firebase.intializeApp(firebaseConfig) 
            : firebase.app();

const db = app.firestore();

export { db };