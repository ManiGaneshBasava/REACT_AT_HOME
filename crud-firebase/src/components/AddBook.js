import React, { useEffect, useState } from 'react'
import bookServices from '../services/book.services'

function AddBook({ id, setBookId }) {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [status, setStatus] = useState("")
    // const [flag,setFlag] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(title);
        console.log(author);
        console.log(status);

        const newBook = {
            title,
            author,
            status
        }

        try {
            if (id !== undefined && id !== "") {
                await bookServices.updateBook(id, newBook)
                setBookId("")
                alert("book updated successfully")
                window.location.reload(true);
            } else {
                await bookServices.addBooks(newBook)
                alert("add Book successfully")
                window.location.reload(true);
            }
        } catch {
            alert("Book not add")
        }
        setTitle("")
        setAuthor("")
        // setStatus("")
    }

    const editHandler = async () => {
        console.log("edit");
        try {
            const editData = await bookServices.getBook(id)
            setTitle(editData.data().title);
            setAuthor(editData.data().author);
            setStatus(editData.data().status)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (id !== undefined && id !== "") {
            editHandler();
        }
    }, [id])

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Book Title</span>
                    <input type="text" className="form-control" placeholder='Book title' value={title} onChange={(e) => setTitle(e.target.value)} required></input><br />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Book Author</span>
                    <input type="text" className="form-control" placeholder='Book Author' value={author} onChange={(e) => setAuthor(e.target.value)} required></input><br />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Book Status</span>
                    <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)} required>

                        <option value='' disabled selected>Select Status</option>
                        <option value="Avilable">Available</option>
                        <option value="Not Avilable">Not Available</option>

                    </select><br />
                </div>


                {/* <button 
                className="btn btn-success"
                disabled={flag}
                onClick={(e)=>{
                    setStatus("Avilabile")
                    setFlag(true)
                    }}>Available</button>
                <button 
                className="btn btn-danger"
                disabled={!flag}
                onClick={(e)=>{
                    setStatus("Not Avilable")
                    setFlag(false)
                    }}>Not Available</button><br/> */}


                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type='submit' className="btn btn-success">Add/ Update</button>
                </div>
            </form>
        </div>
    )
}

export default AddBook 