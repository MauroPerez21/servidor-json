import ACTION from  './actions'

export default function reducer(state=[], action)
{
    switch(action.type){
        case ACTION.ADD:
            const bookInCart = state.books.find((inCart) => 
                inCart.id === action.payload.id);
                bookInCart?
                bookInCart.qty++ :
                state.books.push({...action.payload, qty: 1}) 
            break;
        case ACTION.REMOVE:
            const removeItem = 
                state.books.filter((i)=>
                i.id !== action.payload.id)
                state.books = removeItem
            break;
        case ACTION.INCREASE:
            const oneMore = state.books.find((p)=>
                p.id === action.payload.id)
                oneMore.qty++
            break;
        case ACTION.DECREASE:
            const oneLess = state.books.find((p)=>
                p.id === action.payload.id)
                oneLess.qty === 1?
                oneLess.qty = 1:
                oneLess.qty--
            break;
      
        default: return state
    }
}