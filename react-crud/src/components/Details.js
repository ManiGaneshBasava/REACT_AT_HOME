import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import {  auth, authEdit, userDelete } from './redux/Action'

function Details() {
    const state = useSelector(state => state.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const deleteHandeler = (e) => {
        console.log(e.email);
        dispatch(userDelete(state.filter(each => each.email !== e.email)))
    }

    const editHandeler=(each)=>{
        console.log('preseed edit');
        dispatch(authEdit(each))
        navigate('/edit')
    }
    
    const logoutHandlar=()=>{
        dispatch(auth(false))
        navigate('/login')
    }

    const homePage=()=>{
        navigate('/')
    }

    const tableData = state.map((each ,key)=> {
        return (<tr key={key}>
            <td><button onClick={homePage}>Home</button></td>
            <td>{each.name}</td>
            <td>{each.email}</td>
            <td>{each.number}</td>
            <td>
             <button onClick = {()=>editHandeler(each)} >Edit</button> 

             <button onClick={()=>deleteHandeler(each)}>Delete</button>
            </td>
        </tr>)
    })

    return (
        <div>{console.log(state)}
            <table className="table table-striped">
                <thead>
                <tr>
                    <td></td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile Number</td>
                    <td>Actions</td>
                </tr>
                </thead>
                <tbody>
                {tableData}
                </tbody>
            </table>
            <button onClick={logoutHandlar}>LOGOUT</button>
        </div>
)}
export default Details