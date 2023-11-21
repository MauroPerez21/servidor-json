import X from 'react'
const CounterButton = ()=>{
    const [counter, setCounter] = X.useState(0);
    return(
        <>
        <button
        onClick={()=>setCounter(counter-1)}
        >-
        </button>
        <span>{counter}</span>
        <button
        onClick={()=>setCounter(counter+1)}
        >+
        </button>
        </>
    );
}
export default CounterButton
