//import { getFirestore, collection, doc, setDoc , getDoc} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"; 
import { getFirestore, collection, doc, setDoc , getDoc} from "firebase/firestore"; 
import { initializeApp } from 'firebase/app';

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
const db = getFirestore();

console.log(dateTimeNow());

export function userExists(uid){

getExistData(uid).then((data) => {
  console.log(typeof data, data);

if (data != 'undefined') {
    console.log()
    return true;
  } else {
    return false;
  }

});

}

async function getExistData(uid){

    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();

}

userExists("0Hcd7fYSppfWkIVfDjSmfOZ3JVA2");
function IntTwoChars(i) {
  return (`0${i}`).slice(-2);
  }

function dateTimeNow(){
  let ts = Date.now();

  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();

return(year + "-" + month + "-" + date) + " " + hours + ":" + minutes + ":" + seconds ;
}



