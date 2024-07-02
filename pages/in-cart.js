import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {remove, up, down} from '../shopping/admin/book-slice'
export default function inCart() {

    const initState = useSelector((state)=>state.books)
    const booksInCart =  initState.books
    const dispatch = useDispatch()
    return (
        <>
        {
        booksInCart.map(book=>(
          <section key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.description}</p>  
          <button
          onClick={()=>dispatch(down({id:book.id}))}
          >-</button>
          {book.qty}
          <button
          onClick={()=>dispatch(up({id:book.id, 
                                    qty:book.qty}))}
          >+</button>
          <button
          onClick={()=>dispatch(remove({id:book.id,
                                        qty:book.id}))}>
            trash
          </button>
        </section>
      ))
    }
        </>
        
    );
}

