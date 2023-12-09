import { useRouter } from "next/router";
/*
export async function generateStaticParams() 
{
    const url = useRouter()
    const itemId = url.query.id
    console.log(itemId)
    const posts = await fetch(`https://fakestoreapi.com/products/${itemId}`)
    .then((res) => res.json())
   
    return posts.map((post) => ({
      props:{slug: post.slug},
    }))
  }
  */
export default function()
{

   const url = useRouter()
   const itemId = url.query.id
    return(<h2>This is the id: {itemId}</h2>)
}