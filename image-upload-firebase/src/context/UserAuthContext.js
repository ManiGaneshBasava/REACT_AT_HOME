import {
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase-config";

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({})

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth" ,currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserAuthContext.Provider value={{ user, signUp, logIn, logOut }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(UserAuthContext);
}