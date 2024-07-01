import React, { useState } from 'react';
function UseStateObj() {
    const [data, setData] = useState({
        name: 'Rahul',
        age: 21,
        address: {
            city: 'Bangalore'
        }
    });

    const updateCity = () => {
        setData(prevData => ({
            ...prevData, address: {
                ...prevData.address,
                city: 'India'
            }
        }));
    };

    return (
        <div>
            <h2>User info</h2>
            <h3>name: {data.name}</h3>
            <h3>city: {data.address.city}</h3>
            <button onClick={updateCity}>update city</button>
        </div>
    );
}

export default UseStateObj;
