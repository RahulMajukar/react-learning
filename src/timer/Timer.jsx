import { useEffect, useState } from "react";

export default function Timer() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second
        // Cleanup function to clear interval
        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }); // Format time for display

    return (
        <div>
            <h1>Current Time: {formattedTime}</h1>
        </div>
    );
}