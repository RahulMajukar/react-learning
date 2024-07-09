import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetAxiosApi = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return 'Loading...';
    if (error) return 'Error fetching data';

    return (
        <div>
            <h1>GET Request with Axios</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};