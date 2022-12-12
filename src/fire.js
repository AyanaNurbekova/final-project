import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlr75kCsEkf3Misgxfm4UM8bvf3RyrUys",
  authDomain: "final-project-b25c7.firebaseapp.com",
  projectId: "final-project-b25c7",
  storageBucket: "final-project-b25c7.appspot.com",
  messagingSenderId: "986118904596",
  appId: "1:986118904596:web:5fa5d1a430d0e036730001"
};

const fire = firebase.initializeApp(firebaseConfig);
export const db = getFirestore()
export default fire;