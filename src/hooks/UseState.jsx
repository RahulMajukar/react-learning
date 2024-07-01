import React, { useState } from 'react'

function UseState() {
    const [name, setName] = useState('Rahul Majukar')
    return (
        <div>
            <h1>Username is {name}</h1>

            <button onClick={() => { setName("Hackifytech") }}>Update value</button>
        </div>
    )
}

export default UseState