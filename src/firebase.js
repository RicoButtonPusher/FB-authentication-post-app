// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAFxZV840bZPi_Fbqvu1dOWIXmSWaXgfTU",
    authDomain: "facebook-clone-b0860.firebaseapp.com",
    projectId: "facebook-clone-b0860",
    storageBucket: "facebook-clone-b0860.appspot.com",
    messagingSenderId: "815462393854",
    appId: "1:815462393854:web:d9d742aadc740e56dbc2af",
    measurementId: "G-KXCBZW5J17"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;
  //will need this later obviously