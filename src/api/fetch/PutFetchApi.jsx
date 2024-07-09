const PutFetchApi = () => {
    const handlePut = (id) => {
        const updateData = { name: 'Updated User', email: 'updateduser@example.com' };
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('PUT:', data);
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>PUT Request</h1>
            <button onClick={() => handlePut(1)}>Update User 1</button>
        </div>
    );
};

export default PutFetchApi;
