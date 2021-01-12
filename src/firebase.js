import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

let config = {
  apiKey: "AIzaSyB8Rwp8D6Dz918_WZs_Qixk3e49fJFCpt0",
  authDomain: "audit-bpk.firebaseapp.com",
  databaseURL: "https://audit-bpk-default-rtdb.firebaseio.com",
  projectId: "audit-bpk",
  storageBucket: "audit-bpk.appspot.com",
  messagingSenderId: "926140905572",
  appId: "1:926140905572:web:9f729048cef4b411f40771",
  measurementId: "G-FS7N1J8CZN"
};

firebase.initializeApp(config);

export const storage = firebase.storage();
export default firebase.database();