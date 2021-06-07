import firebase from "firebase";



const firebaseConfig = {
   apiKey: "AIzaSyCNAaO0rWkWSDWMyHBi1ky_7KPl_noH1s8",
    authDomain: "insidecollege-2.firebaseapp.com",
    projectId: "insidecollege-2",
    storageBucket: "insidecollege-2.appspot.com",
    messagingSenderId: "854015327591",
    appId: "1:854015327591:web:437a2dd20b1b01aec683c2",
    measurementId: "G-QVE09LDKZ2"
  };
  
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db , auth , provider , storage };
  export default firebaseApp.database().ref();