import { useState } from "react"

function useCounter() {
    const [num, setNum] = useState(0)
    const initialValue = 0
    const increment = () => {
        setNum((prevNum) => prevNum + 1)
    }
    const decrement = () => {
        setNum((prevNum) => prevNum - 1)
    }
    const reset = () => {
        setNum(initialValue)
    }
    return [num, increment, decrement, reset]
}

export default useCounter;