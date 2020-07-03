import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyASdJkzdYGb9U38gJHreVRAhJrLO-KM4QE",
    authDomain: "restaurant-4d6eb.firebaseapp.com",
    databaseURL: "https://restaurant-4d6eb.firebaseio.com",
    projectId: "restaurant-4d6eb",
    storageBucket: "restaurant-4d6eb.appspot.com",
    messagingSenderId: "770472311141",
    appId: "1:770472311141:web:9928b6dcfcb389dd4b098c"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Shortcut to Firestore 
const db = firebase.firestore()
export const firebaseAuth = firebase.auth()
export const dbMenuRef = db.collection('menu')
export const dbOrdersRef = db.collection('orders')