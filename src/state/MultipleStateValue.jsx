import React, { useState } from 'react';
const MultipleStateValue = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleAgeChange = (e) => setAge(e.target.value);

    return (
        <div>
            <input type="text" placeholder="Name" value={name}
                onChange={handleNameChange} />
            <input type="number" placeholder="Age" value={age}
                onChange={handleAgeChange} />

            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
};

export default MultipleStateValue;
