import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAfvMpFY9X2ylSQ97CwKV3LKC3NdkKuJhY",
    authDomain: "ig-reels-c3cb0.firebaseapp.com",
    databaseURL: "https://ig-reels-c3cb0.firebaseio.com",
    projectId: "ig-reels-c3cb0",
    storageBucket: "ig-reels-c3cb0.appspot.com",
    messagingSenderId: "357144504191",
    appId: "1:357144504191:web:4cc2b572a51b516144dc4a",
    measurementId: "G-8X83F4KB0K"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

export default db;  