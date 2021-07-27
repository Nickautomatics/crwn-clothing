import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCcjKezgZWH4mVAiUWttACeI4YS0Zq3GFw",
    authDomain: "crwn-db-20333.firebaseapp.com",
    projectId: "crwn-db-20333",
    storageBucket: "crwn-db-20333.appspot.com",
    messagingSenderId: "985621549806",
    appId: "1:985621549806:web:9e26921854e86bb39259ff",
    measurementId: "G-5EH18GVNT9"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;