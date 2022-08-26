import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext'

function Signup() {
    const {signUp} = useUserAuth();
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handelSave = async(e) => {
        e.preventDefault();
        try {
            await signUp(email,password)
            alert("SignUp Successfully")
            navigate("/")
        }catch(err){
            console.log(err)
            alert(`${err.message} Pleace Login`)
        }
    }

    return (
        <div className='form'>
            <form onSubmit={handelSave}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Enter Email</span>
                <input type="email" className="form-control" placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }}></input><br />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Enter Password</span>
                <input type="password" className="form-control" placeholder='Enter Password' onChange={(e) => { setPassword(e.target.value) }}></input><br />
            </div>
                <button className="btn btn-success" type='submit'>Sign Up</button><br/>
                Already have an account? <Link to="/">Log In</Link>
            </form>
        </div>
    )
}

export default Signup