import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from './redux/Action';

function Admin() {

    const state = useSelector(state => state)
    const [inputData, setInputData] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submitHandelar = (e) => {
        e.preventDefault();

        const loginId = state.data.some(element => element.email === inputData.loginId)
        const pass = state.data.some(element => element.password === inputData.password)

        if (loginId && pass) {
            dispatch(auth(true))
            navigate('/details')
        } else {
            alert("invalid loginId and password")
        }
    }

    const changeHandel = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={submitHandelar}>
                <label>LogIn Id</label>
                <input type='text' name='loginId' onChange={changeHandel} required></input><br />
                <label>password</label>
                <input type='password' name='password' onChange={changeHandel} required></input><br />
                <button type='submit'>LogIn</button>
            </form>
        </div>
    )
}
export default Admin