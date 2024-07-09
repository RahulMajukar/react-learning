import useFetch from './useFetch';

const useFetchMain = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

    if (loading) return 'Loading...';
    if (error) return 'Error fetching data';

    return (
        <div>
            <h1>GET Request with Custom Hook</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default useFetchMain;
