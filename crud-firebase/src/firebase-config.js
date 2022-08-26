import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC36WdgJ_zc1M-cwOPgC7QNmN--No8hduM",
  authDomain: "crud-53e6d.firebaseapp.com",
  projectId: "crud-53e6d",
  storageBucket: "crud-53e6d.appspot.com",
  messagingSenderId: "139236413106",
  appId: "1:139236413106:web:d499a5780741edc9e403ab",
  measurementId: "G-56L2348319"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)