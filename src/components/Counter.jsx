import useCounter from "../customHooks/useCounter";

function Counter() {
    const [num, increment, decrement, reset] = useCounter()

    return (
        <>
            <div className="container shadow-lg w-25 py-3 rounded-3">
                <div className="row">
                    <div className="col-sm">
                        <h1>useCounter()</h1>
                        <h1>Number = ({num})</h1>
                        <button onClick={increment}>Increment</button>
                        <button onClick={decrement}>Decrement</button>
                        <button onClick={reset}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Counter;