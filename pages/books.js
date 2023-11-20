import React from 'react'
import Books from '../lib/books'
import {add} from '../shopping/admin/book-slice'
import { useDispatch } from 'react-redux'

export default function books() {
  const dispatch = useDispatch()
  return (
    <>
    <h1>Books</h1>
   
    {
      Books.map(b=>(
        <section key={b.id}>
        <h2>{b.name}</h2>
        <p>{b.author}</p>
        <button
          onClick={()=>dispatch(add())}
        >add</button>
      </section>
      ))
    } 
    </>
  )
}


