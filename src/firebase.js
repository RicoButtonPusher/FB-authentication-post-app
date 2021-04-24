import firebase from "firebase";

const firebaseConfig = {
    apiKey: "***************************************",
    authDomain: "facebook-clone-b0860.firebaseapp.com",
    projectId: "facebook-clone-b0860",
    storageBucket: "facebook-clone-b0860.appspot.com",
    messagingSenderId: "************",
    appId: "*****************************************",
    measurementId: "************"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;
