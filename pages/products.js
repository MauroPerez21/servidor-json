import React from 'react'
//import MyBooks from '../shopping/my-books'
import {add} from '../shopping/admin/book-slice'
import { useDispatch } from 'react-redux'

export default function() {
  const [state, setState] = React.useState([])
  const dispatch = useDispatch()
  const getData = async()=>{
    const res = await fetch('https://fakestoreapi.com/products?limit=8')
    .then(res => res.json)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    setState(data)
  }
  React.useEffect(()=>{
  getData()
  //console.log(state)
  },
  [])
  return (
    <>
    <h1>Products</h1>
    {
      state.map(product=>(
        <section key={product.id}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <button
          onClick={()=>dispatch(add())}
        >add</button>
      </section>
      ))
    }
    </>
  )
}
