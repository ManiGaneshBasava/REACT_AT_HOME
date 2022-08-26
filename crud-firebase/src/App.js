import './App.css';
import React, { useState } from 'react'
import AddBook from './components/AddBook';
import BooksList from './components/BooksList';

function App() {
  const [bookId, setBookId] = useState()

  const getBookIdHandler = (id) => {
    setBookId(id)
    console.log("home page", id);
  }

  return (
    <div className="App">
      <AddBook id={bookId} setBookId={setBookId} />
      <BooksList getBookId={getBookIdHandler} />
    </div>
  );
}

export default App;
