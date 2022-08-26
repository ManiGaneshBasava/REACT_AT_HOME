import { Navigate } from "react-router-dom"
import { useUserAuth } from "../context/UserAuthContext"
import { Outlet } from "react-router-dom"

export const ProtectedRoute = () => {
    const { user } = useUserAuth();
    console.log(user);

    return (
        <>
            {user ? <Outlet /> : <Navigate to="/" />}
        </>
    )
};

export const LoggedInRoute = () => {
    const { user } = useUserAuth()
    
    return (
        <>
            {!user ? <Outlet /> : <Navigate to="/home" />}
        </>
    )
}

