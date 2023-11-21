import {add} from '../shopping/admin/book-slice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';

export const getStaticProps = async () => 
{
        const res = await fetch('https://fakestoreapi.com/products?limit=10');
        const data = await res.json();
      // console.log(data);
        return{
          props: {param: data}
        }
 }

export default function ({param}) {
  const dispatch = useDispatch()
  const url = useRouter()
    return (
        <>
        {
        param.map(product=>(
          <section key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <button
            onClick={()=>dispatch(add())}
          >add</button>
          <button onClick= {()=>url.push(`/book/${product.id}`)}>
            view
          </button>
        </section>
      ))
    }
        </>
        
    );
  }