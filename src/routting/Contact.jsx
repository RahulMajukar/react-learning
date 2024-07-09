import { useMatch } from "react-router-dom";

export default function Contact() {
    const match = useMatch('/contact');

    if (match) {
        return <p>You are on the Contact!</p>;
    } else {
        return <p>You are not on the dashboard.</p>;
    }
}