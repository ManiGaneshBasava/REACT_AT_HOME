import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBPdKVhWBcDB3sTEhMAVi-9gCCRkeFY_os",
  authDomain: "authentication-b4ca2.firebaseapp.com",
  projectId: "authentication-b4ca2",
  storageBucket: "authentication-b4ca2.appspot.com",
  messagingSenderId: "88140649707",
  appId: "1:88140649707:web:cdaf7b6b251bc11eb95aae",
  measurementId: "G-4E5LRMKLLN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
