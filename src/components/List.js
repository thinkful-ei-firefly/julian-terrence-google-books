import React from 'react'


export default function List(props) {
  console.log(props);
  let books = props.books.length ? props.books.map(book => (<li>{book.volumeInfo.title}</li>)) : <li /> ;
  
  return (
        <div>
             <div>
            <ul>
                {books}
            </ul>
        </div>
        </div>
    )
}
