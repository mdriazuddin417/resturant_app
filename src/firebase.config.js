import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWCyABfceSNeBy7lW8fvcoPAMvcHQQW5I",
  authDomain: "resturantapp-63f27.firebaseapp.com",
  databaseURL: "https://resturantapp-63f27-default-rtdb.firebaseio.com",
  projectId: "resturantapp-63f27",
  storageBucket: "resturantapp-63f27.appspot.com",
  messagingSenderId: "57385699309",
  appId: "1:57385699309:web:d153dcaa617a1a66fe89e4",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, firestore, storage };
