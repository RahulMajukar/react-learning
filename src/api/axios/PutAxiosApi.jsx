import axios from 'axios';

const PutAxiosApi = () => {
    const handlePut = (id) => {
        const updateData = { name: 'Updated User', email: 'updateduser@example.com' };
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateData)
            .then(response => {
                console.log('PUT:', response.data);
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>PUT Request with Axios</h1>
            <button onClick={() => handlePut(1)}>Update User 1</button>
        </div>
    );
};

export default PutAxiosApi;
