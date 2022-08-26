import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyBdEy8-soHxiFM5-POmoho887ijtEWyvVs",
  authDomain: "image-upload-421ab.firebaseapp.com",
  projectId: "image-upload-421ab",
  storageBucket: "image-upload-421ab.appspot.com",
  messagingSenderId: "608231267649",
  appId: "1:608231267649:web:551d68540d85fb9d9d55c0",
  measurementId: "G-M40C1QLDBR"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export const storage = getStorage(app)