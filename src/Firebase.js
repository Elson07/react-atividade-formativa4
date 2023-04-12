import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPmK_GuZ9ybG37k7lFfx1uMgD2Kemi6bk",
    authDomain: "atividadeformativatdw.firebaseapp.com",
    projectId: "atividadeformativatdw",
    storageBucket: "atividadeformativatdw.appspot.com",
    messagingSenderId: "536054762518",
    appId: "1:536054762518:web:323c9896a04d0e357a7937"
};
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;