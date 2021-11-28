import React, {useState} from 'react';
import axios from 'axios'; 

const Books = (props) => {
    const [books, setBooks] = React.useState([])

    React.useEffect(()=>{
        props.setRedirect(false)
        axios.get(`http://openlibrary.org/search.json?q=${props.searchText}`)
        .then((info)=>{
            setBooks(info.data.docs.slice(0, 9))
        }).catch((err)=>{
            console.log("Something went wrong", err)
        })
          
      },[])
      console.log("books variable:", books)
      
    return (
        <div className='books'>
            {books.map(book => {
                return (
                    <div className='individualBook'>
                        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} />
                        <p>{book.title}</p>
                        <p>{book.author_name}</p>

                    </div>
                )
            })}
        </div>
    )
}


export default Books;