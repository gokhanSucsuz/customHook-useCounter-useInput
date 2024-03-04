import { useState } from "react"

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const reset = () => {
        setValue("")
    }

    const inputData = {
        value,
        onChange: (e) => {
            setValue(e.target.value)
        }
    }

    return [value, inputData, reset]
}

export default useInput