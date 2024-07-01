const Card = ({ children, title }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="card-content">{children}</div>
        </div>
    );
};

const ChildrenProps = () => {
    return (
        <div>
            <Card title="Card 1">
                <p>This is the content of Card 1</p>
            </Card>
            <Card title="Card 2">
                <button>Click me!</button>
            </Card>
        </div>
    );
};

export default ChildrenProps;
