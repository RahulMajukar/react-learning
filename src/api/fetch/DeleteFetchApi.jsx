const DeleteFetchApi = () => {
    const handleDelete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    console.log('DELETE: User deleted');
                }
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>DELETE Request</h1>
            <button onClick={() => handleDelete(1)}>Delete User 1</button>
        </div>
    );
};

export default DeleteFetchApi;
