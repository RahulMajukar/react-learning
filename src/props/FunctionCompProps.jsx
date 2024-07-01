export function GreetingWithProps(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Using destructuring
export function GreetingaWithPropsDestructuring({ name }) {
    return <h1>Hello, {name}!</h1>;
}
