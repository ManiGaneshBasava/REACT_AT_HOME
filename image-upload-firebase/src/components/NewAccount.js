import React, { useEffect, useState } from 'react'
import services from '../services/services';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function NewAccount() {

    const navigate=useNavigate()
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    const [email, setEmail] = useState();
    const [country, setCountry] = useState();
    const [password, setPassword] = useState();
    const [file, setFile] = useState("");
    const [url, setUrl] = useState();


    const savaHandler = async (e) => {
        e.preventDefault();
        const newAccount = {
            name,
            number,
            email,
            country,
            url,
            password
        }
        console.log(newAccount);

        try {
            const res = await services.create(email, password)
            console.log(res.user.uid);
            await services.addAccount(res.user.uid, newAccount)
            alert("add Account successfully")
            navigate("/home")
        } catch (err) {
            console.log(err.message);
            alert(err.message)
        }
    }

    useEffect(() => {
        const uploadFile = () => {
            const fileName = new Date().getTime() + file.name
            console.log(fileName);
            const storageRef = ref(storage, fileName)
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error.message);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        setUrl(downloadURL)
                    });
                }
            );
        }
        file && uploadFile()
    }, [file])

   


    return (
        <div className='form'>
            <form onSubmit={savaHandler}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Enter Name</span>
                    <input type="text" className="form-control" placeholder='Enter Name' onChange={(e) => { setName(e.target.value) }} required></input><br />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Mobile Number</span>
                    <input type="number" className="form-control" placeholder='Enter Mobile Number' onChange={(e) => { setNumber(e.target.value) }} required></input><br />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Enter Email</span>
                    <input type="email" className="form-control" placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }} required></input><br />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Country</span>
                    <input type="text" className="form-control" placeholder='Enter Country' onChange={(e) => { setCountry(e.target.value) }} required></input><br />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Upload Dp</span>
                    <input type="file" id='file' className="form-control" onChange={(e) => setFile(e.target.files[0])} required></input><br />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Enter Password</span>
                    <input type="password" className="form-control" placeholder='Enter Password' onChange={(e) => { setPassword(e.target.value) }} required></input><br />
                </div>

                <button className="btn btn-success" type='submit'>Sign Up</button><br />
            </form><br/>
            {/* <button className="btn btn-warning" onClick={handleBack}>Back</button> */}
        </div>
    )
}

export default NewAccount