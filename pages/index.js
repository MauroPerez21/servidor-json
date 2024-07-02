import {add} from '../shopping/admin/book-slice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import docentes  from '../shopping/docentes.json'
export const getStaticProps = async () => 
{
       const res = await fetch('https://mauroperez21.github.io/json/projects/projects.json');
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
        param.map(book=>(
          <section key={book.id}>
          <h2>{book.nombre}</h2>
          <p>{book.descripcion}</p>
          <button
            onClick={()=>dispatch(add({ id:book.id,
                                        title:book.nombre,
                                        description:book.descripcion,
                                        price:book.precio}))}
          >add</button>
          <button onClick= {()=>url.push(`/book/${book.id}`)}>
            view
          </button>
        </section>
      ))
    }
        </>
        
    );
  }