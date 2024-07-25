
import React, { useState, useEffect } from 'react'
import './GetAllBooksComponen.css'
import axios from 'axios'
import BookComponent from './BookCompoent'

const GetAllBooksComponent = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3500/api/v1/books`)
            .then(response => setBooks(response.data))
            .catch(error => console.log(error))
    }, [])

  return (
    <div className='books'>
        {books.map((book, index)=>(
            <BookComponent book={book} key={index}/>
            
        ))}
    </div>
  )
}

export default GetAllBooksComponent