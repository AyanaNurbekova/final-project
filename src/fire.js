import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSdl_zVPhawKxiZiwEVG45pDvt8H1DE64",
  authDomain: "final-project-646ea.firebaseapp.com",
  projectId: "final-project-646ea",
  storageBucket: "final-project-646ea.appspot.com",
  messagingSenderId: "821772412251",
  appId: "1:821772412251:web:c2ca1a7ae121d0282ee67e",
  measurementId: "G-LDB72RVKTH"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
export const db = getFirestore(fire);
export const storage = getStorage();