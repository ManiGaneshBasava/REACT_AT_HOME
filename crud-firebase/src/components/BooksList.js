import React, { useEffect, useState } from 'react'
import bookServices from '../services/book.services'
import swal from 'sweetalert';


function BooksList({ getBookId }) {

    const [books, setBooks] = useState()

    useEffect(() => {
        getBooks();
    }, [])

    const getBooks = async () => {
        const data = await bookServices.getAllBooks()
        console.log(data);
        setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    };

    const deleteHandeler =  (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this book!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Your Boos has been deleted!", {
                icon: "success",
              });
                 bookServices.deleteBook(id)
                getBooks()

            } else {
              swal("Your your book is safe!");
            }
          });




        // await bookServices.deleteBook(id)
        // getBooks()
    }

    const table = books?.map((each, index) => {
        return (
            <tr key={each.id}>
                <td>{index + 1}</td>
                <td>{each.title}</td>
                <td>{each.author}</td>
                <td>{each.status}</td>
                <td>
                    <button class="btn btn-warning" onClick={(e) => getBookId(each.id)}>Edit</button>
                    <button class="btn btn-danger" onClick={(e) => deleteHandeler(each.id)}>Delete</button>
                </td>
            </tr>
        )
    })


    return (
        <div className='form'>{console.log(books)}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Book Title</th>
                        <th>Book Author</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
        </div>
    )
}


export default BooksList