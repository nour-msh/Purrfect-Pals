import firebase from '@react-native-firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCtpEDT8dvXmV30I-nyp8wlRPCVe4VrAmI",
    authDomain: "purrfect-pals.firebaseapp.com",
    projectId: "purrfect-pals",
    storageBucket: "purrfect-pals.appspot.com",
    messagingSenderId: "571025265245",
    appId: "1:571025265245:web:e711871fb43bf95601f3b4"
  };

  let app;
  if (firebase.apps.length===0){
    app= firebase.initializeApp(firebaseConfig);
  }else{
    app= firebase.app()
  }

  const db= app.firestore();

  export default db;