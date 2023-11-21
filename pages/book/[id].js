import { useRouter } from "next/router";
export default function()
{
    const url = useRouter()
    const itemId = url.query.id
    return(<h2>This is the id: {itemId}</h2>)
}