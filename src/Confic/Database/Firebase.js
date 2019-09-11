
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyD1sr3hFQ9grN58adfzWq_Bm_aMaMMDxo8",
  authDomain: "saylanionlineshop.firebaseapp.com",
  databaseURL: "https://saylanionlineshop.firebaseio.com",
  projectId: "saylanionlineshop",
  storageBucket: "saylanionlineshop.appspot.com",
  messagingSenderId: "300956609195",
  appId: "1:300956609195:web:87d158c41251218ccb25ee"
};
  // Initialize Firebase
const firebaseApp =  firebase.initializeApp(firebaseConfig);




var provider = new firebase.auth.FacebookAuthProvider();

let providerapp = provider.setCustomParameters({'display': 'popup'});
export  {firebaseApp,providerapp}







