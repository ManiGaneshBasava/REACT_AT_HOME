import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import {  authEdit, update } from './redux/Action';

function Edit() {

    const dispatch = useDispatch()
    
    const state = useSelector(state => state.data)
    const edit = useSelector(state => state.isEdit)

    const [editData, setEditData] = useState(edit)
    const navigate = useNavigate()

    const submitHandlar = (e) => {
        e.preventDefault();
        const indexValue = state.findIndex((each) => { return each.email === edit.email })
        state[indexValue] = editData
        dispatch(update(state))
        dispatch(authEdit(null))
        navigate('/details', { replace: true })
    }

    const changeHandlar = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value })
    }

    return (
        <div>{console.log(editData)}
            <form onSubmit={submitHandlar}>
                <label>Name</label>
                <input type="text" name='name' value={editData.name} onChange={changeHandlar}></input><br />
                <label>Email</label>
                <input type='text' name='email' value={editData.email} onChange={changeHandlar}></input><br />
                <label>Number</label>
                <input type='number' name='number' value={editData.number} onChange={changeHandlar}></input><br />
                <button type='onsubmit'>Submit</button>
            </form>
        </div>
    )
}
export default Edit