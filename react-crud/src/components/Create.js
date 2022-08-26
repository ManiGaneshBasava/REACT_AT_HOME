import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { create } from './redux/Action'

function Create() {

    const [userData,setUserData]=useState({})
    const dispatch = useDispatch()
    const state = useSelector(state=>state)
    const checkStatus = useSelector(atate=>atate.isLogin)
    const navigate = useNavigate()


    if(checkStatus){
        navigate('/details')
    }

    const submitHandlar=(e)=>{
        e.preventDefault()
        if(!state.data){
            if(userData.password===userData.confirmPassword){
                dispatch(create(userData))
            }else{
                alert("invalid password")
            }
        }

        if(state.data){
            if(!state.data.filter(each=>each.email===userData)){
                if(userData.password===userData.confirmPassword){
                    dispatch(create(userData))
                }else{
                    alert("invalid password")
                }
            }else{
                alert('email is already registered pleace login')
            }
        }else{
            alert('email is already registered pleace login')
            
        }


        // dispatch(create(userData))

    }

    const changeHandelet=(e)=>{
        e.preventDefault();
        setUserData({...userData,[e.target.name] : e.target.value})
    }

    const adminClick = ()=>{
        // e.preventDefault();
        navigate('/login') 
    }


  return (
    <div>{console.log(state)}
        <form onSubmit={submitHandlar}>
            <label>Name</label>
            <input type='text' name='name' onChange={changeHandelet} required></input><br/>
            <label>Email</label>
            <input type='email' name='email'onChange={changeHandelet} required></input><br/>
            <label>Mobile Number</label>
            <input type='number' name='number' onChange={changeHandelet} required></input><br/>
            <label>Password</label>
            <input type='password' name='password'onChange={changeHandelet} required></input><br/>
            <label>Confirm Password</label>
            <input type='password' name='confirmPassword'onChange={changeHandelet} required></input><br/>
            <button type='submit'>Submit</button>
        </form>
        <button onClick={adminClick}>admin login</button>
    </div>
  )
}
export default Create