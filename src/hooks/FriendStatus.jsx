import { useState, useEffect, useDebugValue } from 'react';

// Custom Hook
const useFriendStatus = (friendID) => {
    const [isOnline, setIsOnline] = useState(null);

    useDebugValue(isOnline ? 'Online' : 'Offline');

    useEffect(() => {
        const handleStatusChange = (status) => {
            setIsOnline(status.isOnline);
        };

        // Simulating subscribing to a friend's status
        const simulateSubscription = () => {
            setTimeout(() => handleStatusChange({ isOnline: true }), 2000);  // Simulating online status after 2 seconds
            setTimeout(() => handleStatusChange({ isOnline: false }), 5000); // Simulating offline status after 5 seconds
        };

        simulateSubscription();

        return () => {
            // Simulating cleanup
            setIsOnline(null);
        };
    }, [friendID]);

    return isOnline;
};

// Usage Example
const FriendStatus = ({ friendID }) => {
    const isOnline = useFriendStatus(friendID);

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
};

export default FriendStatus;
