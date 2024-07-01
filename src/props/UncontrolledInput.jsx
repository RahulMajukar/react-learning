import React, { useRef } from 'react';

function UncontrolledInput() {
    const inputRef = useRef("hackifytech");

    const handleSubmit = () => {
        alert(inputRef.current.value);
    };

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
            <h2>input value: {inputRef.current.value}</h2>
        </div>
    );
}

export default UncontrolledInput;
