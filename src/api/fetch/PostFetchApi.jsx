const PostFetchApi = () => {
    const handlePost = () => {
        const postData = { name: 'New User', email: 'newuser@example.com' };
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('POST:', data);
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>POST Request</h1>
            <button onClick={handlePost}>Create User</button>
        </div>
    );
};

export default PostFetchApi;
