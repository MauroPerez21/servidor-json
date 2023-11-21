import Link from 'next/link'
import { BsFillCartCheckFill } from "react-icons/bs";
export default function Navlist(){
    return (<>
                <h1>Next.js & Redux Toolkit Library</h1>
                <ul >
                    <li>
                    <Link href="/">home</Link>
                    </li>
                    <li>
                    <Link href="/books">books</Link>
                    </li>
                    <li>
                    <Link href="/products">
                        products</Link>
                    </li>
                    <li>
                    <Link href="/booklist">
                        in-cart&nbsp;<BsFillCartCheckFill/></Link>
                    </li>
                </ul>)
    </>)
            
}