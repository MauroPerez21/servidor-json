import ACTION from  './actions'

export default function reducer(state=[], action)
{
    switch(action.type){
        case ACTION.ADD:
            console.log('book is added')
            break;
        case ACTION.REMOVE:
            console.log('book is removed')
            break;
        case ACTION.INCREASE:
            console.log('one book more')
            break;
        case ACTION.DECREASE:
            console.log('one book less')
            break;
      
        default: return state
    }
}