import { db } from "../firebase-config";
import { collection, getDoc, getDocs, updateDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";


const accountCollectionRef = collection(db, "data")
class Service {


    addAccount = (id, newAccount) => {
        return setDoc(doc(db, "data", id), { newAccount })
    }

    updateAccount = (id, updateAccount) => {
        const accountDoc = doc(db, "user-data", id);
        return updateDoc(accountDoc, updateAccount);
    }

    deleteAccount = (id) => {
        const accountDoc = doc(db, "data", id);
        return deleteDoc(accountDoc);
    }

    getAllAccounts = () => {
        return getDocs(accountCollectionRef)
    }

    getAccount = (id) => {
        const accountDoc = doc(db, "user-data", id)
        return getDoc(accountDoc)
    }

    create = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    deleteAuth = (id) => {
        // const accountDoc = doc(auth,"users",id)
        // console.log(accountDoc);
        const user = auth.currentUser;
        console.log(user,'currentUser');
        // var user = auth().getUser(id)
        // console.log(accountDoc);
        return deleteUser(id.id).then((res)=>{console.log(res)}).catch((err)=>{console.log(err,'askldf');})
    }
}

export default new Service();