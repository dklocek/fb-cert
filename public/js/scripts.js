import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, signInAnonymously, onAuthStateChanged } from'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore, doc, updateDoc, arrayUnion, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';


//import { initializeApp } from 'firebase/app';
//import { getAuth, signInAnonymously } from'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBnK8FEt1QFzDdPxpejYoT8TqLqWhLrj9E",
    authDomain: "fb-cert.firebaseapp.com",
    databaseURL: "https://fb-cert-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fb-cert",
    storageBucket: "fb-cert.appspot.com",
    messagingSenderId: "126437445200",
    appId: "1:126437445200:web:de5aa15aadecac8e77cb55",
    measurementId: "${config.measurementId}"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore();
//const rtdb;

export function getAuthConst(){
    return auth;
}

export function getAppConst(){
    return app;
}

onAuthStateChanged(auth, (user) => {
    if (user) {
       console.log("script.js");
       console.log("onAuthStateChanged:", user.uid);
       console.log("UserData; ", user.isAnonymous);
       console.log("ProviderId; ", user.providerId);

       if(!user.isAnonymous){
        //FIRESTORE   
        let docRef = doc(firestore, "users", user.uid);
        let timestamp = dateTimeNow();
        updateDoc(docRef, {logged: arrayUnion(timestamp)}).catch((error) =>{
            let data = {logged: [timestamp]};
            setDoc(docRef, data);            
        });

        }
    } else {
       
    }
    });

function recordToFirestore(user){

}

function dateTimeNow(){
    let ts = Date.now();
  
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = pr(date_ob.getMonth() + 1);
    let year = date_ob.getFullYear();
    let hours = pr(date_ob.getHours());
    let minutes = pr(date_ob.getMinutes());
    let seconds = pr(date_ob.getSeconds());
  
  return(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
  }

  function pr(data){
       if(data < 10){
          data = "0"+data;
      }
      console.log(data);
      return data;

  }
