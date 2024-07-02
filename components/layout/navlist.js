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
                    <Link href="/in-cart">
                        in-cart</Link>
                    </li>
                </ul>)
    </>)
            
}