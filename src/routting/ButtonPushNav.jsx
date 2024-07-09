import { useNavigate } from 'react-router-dom'

export default function ButtonPushNav() {
    const navigate = useNavigate();

    const gotoBlog = () => {
        navigate('/blog');
    }
    return (
        <div>
            <button onClick={gotoBlog}>Go to Blog</button>
        </div>
    )
}