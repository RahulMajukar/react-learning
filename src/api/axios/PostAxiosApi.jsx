import axios from 'axios';

const PostAxiosApi = () => {
    const handlePost = () => {
        const postData = { name: 'New User', email: 'newuser@example.com' };
        axios.post('https://jsonplaceholder.typicode.com/users', postData)
            .then(response => {
                console.log('POST:', response.data);
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>POST Request with Axios</h1>
            <button onClick={handlePost}>Create User</button>
        </div>
    );
};

export default PostAxiosApi;
