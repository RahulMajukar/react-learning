import React, { useState } from 'react';
const StateObject = () => {
    const [user, setUser] = useState({ name: '', age: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    return (
        <div>
            <input type="text" name="name" placeholder="Name" value={user.name}
                onChange={handleChange} />
            <input type="number" name="age" placeholder="Age" value={user.age}
                onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={user.email}
                onChange={handleChange} />
            <p>Name: {user.name}</p> <p>Age: {user.age}</p> <p>Email: {user.email}</p>
        </div>
    );
};

export default StateObject;
