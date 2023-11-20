import Link from 'next/link'
import { BsFillCartCheckFill } from "react-icons/bs";
export default function Navlist(){
    return (<ul >
                <li>
                <Link href="/">home</Link>
                </li>
                <li>
                <Link href="/books">books</Link>
                </li>
                <li>
                <Link href="/book">book</Link>
                </li>
                <li>
                <Link href="/booklist">
                    <BsFillCartCheckFill/>&nbsp;
                    booklist</Link>
                </li>
                <li>
                <Link href="/products">
                    products</Link>
                </li>
            </ul>)
}