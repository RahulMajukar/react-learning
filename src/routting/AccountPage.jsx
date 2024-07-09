import { useNavigate } from 'react-router-dom';

function AccountPage() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check authentication status (e.g., fetch from server)
        setIsAuthenticated(true);
    }, []);

    if (!isAuthenticated) {
        navigate('/login'); // Redirect to login if not authenticated
    }

    // ... account page content and logic
}
