import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 
    authDomain:
    databaseURL: 
    projectId: 
    storageBucket: 
    messagingSenderId: 
    appId: 
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Shortcut to Firestore 
const db = firebase.firestore()
export const firebaseAuth = firebase.auth()
export const dbMenuRef = db.collection('menu')
export const dbOrdersRef = db.collection('orders')
