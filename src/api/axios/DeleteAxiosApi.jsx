import axios from 'axios';

const DeleteAxiosApi = () => {
    const handleDelete = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                if (response.status === 200) {
                    console.log('DELETE: User deleted');
                }
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>DELETE Request with Axios</h1>
            <button onClick={() => handleDelete(1)}>Delete User 1</button>
        </div>
    );
};

export default DeleteAxiosApi;
