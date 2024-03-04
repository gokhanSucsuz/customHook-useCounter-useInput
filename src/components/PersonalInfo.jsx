import { useState } from 'react'
import useInput from '../customHooks/useInput'

function PersonalInfo() {
    const [firstName, inputDataFN, resetFirstName] = useInput("")
    const [lastName, inputDataLN, resetLastName] = useInput("")
    const [showValue, setShowValue] = useState(`${firstName} ${lastName}`)
    const submitForm = (e) => {
        e.preventDefault()
        setShowValue(`${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-sm">
                        <form onSubmit={submitForm} className='my-5 d-flex flex-column w-25 shadow p-3 justify-content-evenly'>
                            <h1>useInput()</h1>
                            <label>Name</label>
                            <input
                                type="text"
                                {...inputDataFN}
                            />
                            <label>Lastname</label>
                            <input
                                type="text"
                                {...inputDataLN}
                            />
                            <div className="col-sm py-3 d-flex">
                                <button>Save</button>
                                <button onClick={() => setShowValue("")}>Clear</button>
                            </div>
                        </form>
                        <h1 className='text-success fw-bolder'>{showValue}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalInfo