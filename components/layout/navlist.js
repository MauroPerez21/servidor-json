import Link from 'next/link'

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
                <Link href="/booklist">booklist</Link>
                </li>
            </ul>)
}