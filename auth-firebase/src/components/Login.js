import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

function Login() {

    const { logIn } = useUserAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await logIn(email, password)
            alert("login Successfully")
            navigate("/home")
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className='form'>
            <form onSubmit={handleLogin}>
            <div className="input-group mb-3">  
                <span className="input-group-text" id="basic-addon1">Enter Login Id</span>
                <input type="email" className="form-control" placeholder='Enter Login Id' onChange={(e) => { setEmail(e.target.value) }}></input><br />
            </div>

            <div className="input-group mb-3">  
                <span className="input-group-text" id="basic-addon1">Enter Password</span>
                <input type="password" className="form-control" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }}></input><br />
                </div>
                <button className="btn btn-success" type='submit'>LogIn</button><br />
                Don't have an account? <Link to="/signup">Sign up</Link>
            </form>
        </div>
    )
}

export default Login