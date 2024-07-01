function DefaultProps({ name, age }) {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>You are {age} years old.</p>
        </div>
    );
}

DefaultProps.defaultProps = {
    name: 'Rahul',
    age: 18,
};

export default DefaultProps;