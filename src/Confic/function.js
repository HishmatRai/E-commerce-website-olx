// import firebase from "./Database/Firebase";
import {providerapp,firebaseApp} from './Database/Firebase'

// var database = firebase.database().ref('/');
// Facebook L

function signup(email, password) {
    console.log(email, password)
    return new Promise((resolve, reject) => {
        firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(res => resolve({ email: res.user.email, uid: res.user.uid }
        )).catch((rej) => reject(rej))
    })
}

function login(email, password) {
    return new Promise((resolve, reject) => {
        firebaseApp.auth().signInWithEmailAndPassword(email, password).then(res => resolve(res.user)).catch((rej) => reject(rej))
    })

}

function logout() {
    return new Promise((resolve, reject) => {
        firebaseApp.auth().signOut().then((res) => resolve(res)).catch((err) => reject(err))
    })

}

// let LoginAdmin = (email, password, props) => {
//     return new Promise((resolve, reject) => {
//         firebase.auth().signInWithEmailAndPassword(email, password)
//             .then(res => {
//                 let obj = {
//                     email: res.user.email,
//                     id: res.user.uid,
//                 }
//                 database.child('Admin').set(obj)
//                 resolve(obj)
//             })
//             .catch(error => {
//                 reject(error.code)
//                 console.log('i am error')

//             });

//     });
// };


function Adminlogin(email,password){
    return new Promise((resolve,reject)=>{
        firebaseApp.auth().signInWithEmailAndPassword(email,password).then(user=>{
            resolve("user ==>",user.emailVerified)
        }).catch(function(error) {
            reject(error.message);
            // ...
          });
    })
}



function loginfacebook(){
    return new Promise((resolve,reject)=>{
        firebaseApp.auth().signInWithPopup(providerapp)
    .then((result)=> {
      var user = result.user;
      resolve(user)
    }).catch(function(error) {
      var credential = error.credential;
      reject(credential)
    });
    })
    }
export {
    Adminlogin,
    signup,
    login,
    logout,
    loginfacebook
}